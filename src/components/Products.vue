<template>
  <div id="products">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Products <small></small></h3>
        </div>
        <div class="title_right">
          <div class="pull-right">
            <div class="input-group">
              <div class="btn-group">
                <router-link to="/NewProduct"><button type="button" class="btn btn-default">New</button></router-link>
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

              <div id="productsTable">
                <v-client-table :data="table.data" :columns="table.columns" :options="table.options"></v-client-table>
              </div>

              <!-- <table id="datatable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Product Family</th>
                    <th>Quote</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products">
                    <td>
                      <router-link :to="{ name: 'ExistingProduct', params: {productCode : product.code}}">
                        {{ product.name }}
                      </router-link>
                    </td>
                    <td>{{ product.code }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.family }}</td>
                    <td>{{ product.quote }}</td>
                  </tr>
                </tbody>
              </table> -->
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
        // products : []
        accounts : [],
        table: {
          columns: ['name','code','description','family', 'quote'],
          data: [],
          options: {
            perPage : 15,
            perPageValues : [5, 10, 15, 25, 50, 100],
            headings: {
                name: 'Name',
                code: 'Code',
                description: 'Description',
                family: 'Family',
                quote: 'Quote'
            },
            
            texts : { 
              count:'Showing {from} to {to} of in total {count} products', 
              filter:'Search Products:',
              filterPlaceholder:'', 
              limit:'Table Size:', 
              noResults:'No products found', 
              page:'Page:'
              // for dropdown pagination filterBy: 'Filter by {column}', // Placeholder for search fields when filtering by column loading:'Loading...', // First request to server defaultOption:'Select {column}' // default option for list filters }
            }
          }
        }
      }
    },

    mounted(){
      console.log('mount: products component');
      axios.get('/getProducts')
      .then(response => {
        //this.products = response.data;
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
