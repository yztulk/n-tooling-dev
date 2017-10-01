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