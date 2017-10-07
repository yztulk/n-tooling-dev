require( './check-versions' )()

var config = require( '../config' )
if ( !process.env.NODE_ENV ) {
	process.env.NODE_ENV = JSON.parse( config.dev.env.NODE_ENV )
}

var opn = require( 'opn' )
var path = require( 'path' )
var express = require( 'express' )
var webpack = require( 'webpack' )
var proxyMiddleware = require( 'http-proxy-middleware' )
var webpackConfig = ( process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production' ) ? require( './webpack.prod.conf' ) : require( './webpack.dev.conf' )

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
	// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
	// Define HTTP proxies to your custom API backend
	// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack( webpackConfig )

var devMiddleware = require( 'webpack-dev-middleware' )( compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
} )

var hotMiddleware = require( 'webpack-hot-middleware' )( compiler, {
		log: false,
		heartbeat: 2000
	} )
	// force page reload when html-webpack-plugin template changes
compiler.plugin( 'compilation', function( compilation ) {
	compilation.plugin( 'html-webpack-plugin-after-emit', function( data, cb ) {
		hotMiddleware.publish( {
			action: 'reload'
		} )
		cb()
	} )
} )

// proxy api requests
Object.keys( proxyTable ).forEach( function( context ) {
	var options = proxyTable[ context ]
	if ( typeof options === 'string' ) {
		options = {
			target: options
		}
	}
	app.use( proxyMiddleware( options.filter || context, options ) )
} )

// handle fallback for HTML5 history API
app.use( require( 'connect-history-api-fallback' )() )

// serve webpack bundle output
app.use( devMiddleware )

// enable hot-reload and state-preserving
// compilation error display
app.use( hotMiddleware )

// serve pure static assets
var staticPath = path.posix.join( config.dev.assetsPublicPath, config.dev.assetsSubDirectory )
app.use( staticPath, express.static( './static' ) )

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise( resolve => {
	_resolve = resolve
} )

var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
const {
	Pool,
	Client
} = require( 'pg' )

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
	extended: true
} ) );

//Add database to dev set up
const pool = new Pool( {
	user: 'redtree',
	host: 'poc-ndis-tooling.cmo2rmmukfwp.ap-southeast-2.rds.amazonaws.com',
	database: 'poc_db_ndis_tooling',
	password: '3h76fRMZcDigfTvf',
	port: 5432
} );

/**
 * BEGIN APIs
 */

app.get( '/queryAccount', function( req, res ) {
	console.log( '/queryAccount' );
	var accountId = req.param( 'accountId' );
	console.log( 'accountId is: ' + accountId );

	var query = 'SELECT * FROM Account WHERE account_id = ' + accountId + ' LIMIT 1';

	//pool.query( 'SELECT * FROM Account WHERE account_id = 35 LIMIT 1', ( err, resQuery ) => {
	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.get( '/query', function( req, res ) {
	console.log( '/query all accounts' );
	pool.query( 'SELECT * FROM Account ORDER BY row_created DESC NULLS LAST', ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.post( '/insertAccount', function( req, res ) {
	console.log( '/insertAccount' );
	var body = req.body;

	var insertStatement = "INSERT INTO Account (Name, Street_Name, Street_Number, City, Postal_Code, Country, State) ";
	insertStatement += "VALUES ('" + body.name + "', '" + body.streetName + "', '" + body.streetNameNumber + "', '" + body.city + "', '" + body.postalCode + "', '" + body.country + "', '" + body.state + "') ";
	insertStatement += "RETURNING account_id";

	pool.query( insertStatement, ( err, result ) => {
		res.send( {
			accountId: result.rows[ 0 ].account_id
		} );
	} );

} );

app.get( '/getProducts', function( req, res ) {
	console.log( '/getProducts' );
	pool.query( 'SELECT * FROM product ORDER BY row_created DESC NULLS LAST', ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.get( '/getProduct', function( req, res ) {
	console.log( '/getProduct' );
	var productCode = req.param( 'productCode' );

	var query = "SELECT * FROM product WHERE code = '" + productCode + "' LIMIT 1";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.get( '/getJobs', function( req, res ) {
	console.log( '/getJobs' );
	pool.query( 'SELECT * FROM job ORDER BY row_created DESC NULLS LAST', ( err, resQuery ) => {
		//res.send( resQuery.rows );
		res.send( resQuery.rows );
	} );
} );

app.get( '/getJob', function( req, res ) {
	console.log( '/getJob' );
	var jobId = req.param( 'jobId' );

	var query = "SELECT * FROM job WHERE job_number = '" + jobId + "' LIMIT 1";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.get( '/getJobCount', function( req, res ) {
	console.log( '/getJobCount' );

	var query = "SELECT count(*) FROM job";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.post( '/insertJob', function( req, res ) {
	console.log( '/insertJob' );
	var body = req.body;

	// jobNumber : '',
	// travelCost : '',
	// type : '',
	// address : '',
	// duration : '',
	// timezone : '',
	// generalLedgerCode : '',
	// quantity : '',
	// reschedule : '',
	// listPrice : '',
	// travelBillable : '',
	// resourceHoursWorked : '',
	// status : '',
	// cancellationReason : '',
	// cancellationComment : ''

	//Nullify integer fields if blank
	if ( body.duration.length === 0 ) body.duration = 'null';

	var insertStatement = "INSERT INTO Job (job_number, support_item_id, travel_cost, type, address, duration, timezone, general_ledger_code, list_price, status) "; //, quantity, reschedule, travel_billable, resource_hours_worked, cancellation_reason, cancellation_comment) ";
	insertStatement += "VALUES (";
	insertStatement += "'" + body.jobNumber + "', ";
	//insertStatement += "'SI-12', ";
	insertStatement += "'" + body.supportItemId + "', ";
	insertStatement += "'" + body.travelCost + "', ";
	insertStatement += "'" + body.type + "', ";
	insertStatement += "'" + body.address + "', ";
	insertStatement += body.duration + ", ";
	insertStatement += "'" + body.timezone + "', ";
	insertStatement += "'" + body.generalLedgerCode + "', ";
	insertStatement += "'" + body.listPrice + "', ";
	insertStatement += "'" + body.status + "')";
	insertStatement += " RETURNING job_number";

	pool.query( insertStatement, ( err, result ) => {
		if ( err ) {
			console.log( 'An error occured while inserting the job in the database' );
			console.log( err );
		} else {
			res.send( {
				jobId: result.rows[ 0 ].job_number
			} );
		}
	} );

} );

app.get( '/getSupportItems', function( req, res ) {
	console.log( '/getSupportItems' );
	pool.query( 'SELECT * FROM support_item ORDER BY row_created DESC NULLS LAST', ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.get( '/getSupportItem', function( req, res ) {
	console.log( '/getSupportItem' );
	var supportItemId = req.param( 'supportItemId' );

	var query = "SELECT * FROM support_item WHERE support_item_number = '" + supportItemId + "' LIMIT 1";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.get( '/getPlans', function( req, res ) {
	console.log( '/getPlans' );
	pool.query( 'SELECT * FROM plan ORDER BY row_created DESC NULLS LAST', ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.get( '/getPlan', function( req, res ) {
	console.log( '/getPlan' );
	var planId = req.param( 'planId' );

	var query = "SELECT * FROM plan WHERE plan_number = '" + planId + "' LIMIT 1";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.get( '/getFundCategories', function( req, res ) {
	console.log( '/getFundCategories' );
	var planId = req.param( 'planId' );

	var query = "SELECT * FROM fund_category WHERE plan_id = '" + planId + "';";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.get( '/getFundCategory', function( req, res ) {
	console.log( '/getFundCategory' );
	var fundCategoryId = req.param( 'fundCategoryId' );

	var query = "SELECT * FROM fund_category WHERE fund_category_number = '" + fundCategoryId + "' LIMIT 1";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows[ 0 ] );
	} );
} );

app.get( '/getGoals', function( req, res ) {
	console.log( '/getGoals' );
	var planId = req.param( 'planId' );

	var query = "SELECT * FROM goal WHERE plan_id = '" + planId + "';";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.get( '/getFundCategorySupportItems', function( req, res ) {
	console.log( '/getFundCategorySupportItems' );
	var fundCategoryId = req.param( 'fundCategoryId' );

	var query = "SELECT * FROM support_item WHERE fund_category_id = '" + fundCategoryId + "';";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

app.get( '/getSupportItemJobs', function( req, res ) {
	console.log( '/getSupportItemJobs' );
	var supportItemId = req.param( 'supportItemId' );

	var query = "SELECT * FROM job WHERE support_item_id = '" + supportItemId + "';";

	pool.query( query, ( err, resQuery ) => {
		res.send( resQuery.rows );
	} );
} );

/**
 * END APIs
 */

console.log( '> Starting dev server...' )
devMiddleware.waitUntilValid( () => {
	console.log( '> Listening at ' + uri + '\n' )
		// when env is testing, don't need open it
	if ( autoOpenBrowser && process.env.NODE_ENV !== 'testing' ) {
		opn( uri )
	}
	_resolve()
} )

var server = app.listen( port )

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
}