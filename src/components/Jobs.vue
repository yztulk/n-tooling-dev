<template>
  <div id="jobs">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Jobs <small></small></h3>
        </div>
        <div class="title_right">
          <div class="pull-right">
            <div class="input-group">
              <div class="btn-group">
                <router-link to="/NewJob"><button type="button" class="btn btn-default">New</button></router-link>
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

              <table id="jobsTable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Job Number</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>List Price</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="job in jobs">
                    <td>
                      <router-link :to="{ name: 'ExistingJob', params: {jobId : job.job_number}}">
                        {{ job.job_number }}
                      </router-link>
                    </td>
                    <td>{{ job.type }}</td>
                    <td>{{ job.status }}</td>
                    <td>{{ job.list_price }}</td>
                    <td>{{ job.address }}</td>
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
        jobs : []
      }
    },

    methods : {
      
    },

    mounted(){
      console.log('mount: jobs component');
      axios.get(`/getJobs`)
      .then(response => {
        //console.log(response.data);
        this.jobs = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
