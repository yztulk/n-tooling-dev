<template>
  <div id="supportItems">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Support Items <small></small></h3>
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
              <table id="datatable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>List Price</th>
                    <th>Committed</th>
                    <th>Consumed</th>
                    <th>Invoiced</th>
                    <th>Claimed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="supportItem in supportItems">
                    <td>
                      <router-link :to="{ name: 'ExistingSupportItem', params: {supportItemId : supportItem.support_item_number}}">
                        {{ supportItem.support_item_number }}
                      </router-link>
                    </td>
                    <td>{{ supportItem.list_price }}</td>
                    <td>{{ supportItem.committed }}</td>
                    <td>{{ supportItem.consumed }}</td>
                    <td>{{ supportItem.invoiced }}</td>
                    <td>{{ supportItem.claimed }}</td>
                  </tr>
                </tbody>
              </table>
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

    components: {
    },

    data () {

      return {
        supportItems : []
      }
    },

    methods : {
      
    },

    mounted(){
      console.log('mount: support items component');
      axios.get('/getSupportItems')
      .then(response => {
        this.supportItems = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
