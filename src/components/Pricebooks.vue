<template>
  <div id="pricebooks">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Price Books <small></small></h3>
        </div>
        <div class="title_right">
          <div class="pull-right">
            <div class="input-group">
              <div class="btn-group">
                <router-link to="/NewPricebook"><button type="button" class="btn btn-default">New</button></router-link>
                <button type="button" class="btn btn-default">Import</button>
                <button type="button" class="btn btn-default">Reports</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="row">
        <div class="col-xs-12">
          <div class="x_panel">
            <div class="x_content">
              <div id="pricebooksTable">
                <v-client-table :data="table.data" :columns="table.columns" :options="table.options"></v-client-table>
              </div>
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
        table: {
          columns: ['name','description','isActive', 'isStandardPricebook'],
          data: [],
          options: {
            perPage : 15,
            perPageValues : [5, 10, 15, 25, 50, 100],
            headings: {
                name: 'Name',
                description: 'Description',
                isActive: 'Active',
                isStandardPricebook: 'Is Standard Price Book'
            },
            
            texts : { 
              count:'Showing {from} to {to} of in total {count} price books', 
              filter:'Search Price books:',
              filterPlaceholder:'', 
              limit:'Table Size:', 
              noResults:'No price books found', 
              page:'Page:'
              // for dropdown pagination filterBy: 'Filter by {column}', // Placeholder for search fields when filtering by column loading:'Loading...', // First request to server defaultOption:'Select {column}' // default option for list filters }
            }
          }
        }
      }
    },

    mounted(){
      console.log('mount: pricebook component');
      axios.get('/getPricebooks')
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
