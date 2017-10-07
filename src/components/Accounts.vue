<template>
  <div id="accounts">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Accounts <small></small></h3>
        </div>
        <div class="title_right">
          <div class="pull-right">
            <div class="input-group">
              <div class="btn-group">
                <router-link to="/NewAccount"><button type="button" class="btn btn-default">New</button></router-link>
                <button type="button" class="btn btn-default">Import</button>
                <button type="button" class="btn btn-default">Reports</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="row">
        <div class="col-md-8 col-sm-12 col-xs-12">
          <div class="x_panel">
            <div class="x_content">
              <div id="accountsTable">
                <v-client-table :data="table.data" :columns="table.columns" :options="table.options"></v-client-table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="x_panel">
            <div class="x_title">
              <h2>Financials</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <canvas id="canvasDoughnut"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';


  export default {

    data () {

      return {
        accounts : [],
        table: {
          columns: ['name','street_number','postal_code','state', 'country'],
          data: [],
          options: {
            perPage : 15,
            perPageValues : [5, 10, 15, 25, 50, 100],
            headings: {
                name: 'Name',
                street_number: 'Street Number',
                postal_code: 'Postal Code',
                state: 'State',
                country: 'Country'
            },
            
            texts : { 
              count:'Showing {from} to {to} of in total {count} accounts', 
              filter:'Search Accounts:',
              filterPlaceholder:'', 
              limit:'Table Size:', 
              noResults:'No accounts found', 
              page:'Page:'
              // for dropdown pagination filterBy: 'Filter by {column}', // Placeholder for search fields when filtering by column loading:'Loading...', // First request to server defaultOption:'Select {column}' // default option for list filters }
            }
          }
        }
      }
    },

    methods : {

    },

    mounted(){
      console.log('mount: accounts component');
      axios.get(`/query`)
      .then(response => {
        this.table.data = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
