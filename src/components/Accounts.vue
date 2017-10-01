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
              <table id="datatable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Street Name</th>
                    <th>Postal Code</th>
                    <th>State</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="account in accounts">
                    <td>
                      <router-link :to="{ name: 'ExistingAccount', params: {accountId : account.account_id}}">
                        {{ account.name }}
                      </router-link>
                    </td>
                    <td>{{ account.street_name }}</td>
                    <td>{{ account.postal_code }}</td>
                    <td>{{ account.state }}</td>
                    <td>{{ account.country }}</td>
                  </tr>
                </tbody>
              </table>
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
        accounts : []
      }
    },

    methods : {
      getAccounts: function(){
        axios.get(`/query`)
        .then(response => {
          this.accounts = response.data;
        })
        .catch(e => {
          console.log(e);
        })
      },
    },

    mounted(){
      console.log('mount: accounts component');
      axios.get(`/query`)
      .then(response => {
        this.accounts = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
