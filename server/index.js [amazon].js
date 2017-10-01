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

/**
 * END APIs
 */