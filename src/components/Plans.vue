<template>
  <div id="plans">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Plans <small></small></h3>
        </div>
        <div class="title_right">
          <div class="pull-right">
            <div class="input-group">
              <div class="btn-group">
                <router-link to="/NewPlan"><button type="button" class="btn btn-default">New</button></router-link>
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
              <!-- <p class="text-muted font-13 m-b-30">
                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>
              </p> -->
              <table id="datatable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Plan Number</th>
                    <th>Client</th>
                    <th>End Date</th>
                    <th>Total Budget Amount</th>
                    <th>Budget Available</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>                
                  <tr v-for="plan in plans">
                    <td>
                      <router-link :to="{ name: 'ExistingPlan', params: {planId : plan.plan_number}}">
                        {{ plan.plan_number }}
                      </router-link>
                    </td>
                    <td>TODO: Add client_id</td> 
                    <td>{{ plan.end_date }}</td>
                    <td>{{ plan.budget_total_budget }}</td>
                    <td>{{ plan.budget_available }}</td>
                    <td>{{ plan.status }}</td>
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
    components: {
    },

    data () {

      return {
        plans : []
      }
    },

    methods : {
      
    },

    mounted(){
      console.log('mount: plans component');
      axios.get('/getPlans')
      .then(response => {
        console.log(response);
        this.plans = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
