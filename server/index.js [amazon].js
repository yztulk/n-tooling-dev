var express = require( 'express' );
var app = express();
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

app.set( 'port', 80 );
app.use( express.static( __dirname + '/dist/n-tooling-prod' ) );
app.set( 'views', __dirname + '/dist/n-tooling-prod' );
app.engine( 'html', require( 'ejs' ).renderFile );
app.set( 'view engine', 'html' );

app.get( '/', function( req, res ) {
	res.render( './index.html' )
} );

app.listen( app.get( 'port' ), function() {
	console.log( 'Node app is running on port', app.get( 'port' ) );
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