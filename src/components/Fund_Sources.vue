<template>
  <div id="fundSources">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Fund Sources <small></small></h3>
        </div>
        <div class="title_right">
          <div class="pull-right">
            <div class="input-group">
              <div class="btn-group">
                <router-link to="/NewFundSource"><button type="button" class="btn btn-default">New</button></router-link>
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
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/ExistingFundSource">3rd Party Managed</router-link></td>
                    <td></td>
                    <td>NDIS</td>
                    <td>Active</td>
                    <td>02-08-2017</td>
                    <td>02-08-2999</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingFundSource">ADHC - Southern Highlands</router-link></td>
                    <td></td>
                    <td>Donation</td>
                    <td>Active</td>
                    <td>02-08-2017</td>
                    <td>02-08-2999</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingFundSource">Agency Managed</router-link></td>
                    <td></td>
                    <td>Other</td>
                    <td>Active</td>
                    <td>02-08-2017</td>
                    <td>02-08-2999</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingFundSource">NDIS Managed</router-link></td>
                    <td></td>
                    <td>NDIS</td>
                    <td>Active</td>
                    <td>02-08-2017</td>
                    <td>02-08-2999</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingFundSource">Self Managed</router-link></td>
                    <td></td>
                    <td>NDIS</td>
                    <td>Active</td>
                    <td>02-08-2017</td>
                    <td>02-08-2999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 col-xs-12">
          <<!-- div class="x_panel">
            <div class="x_title">
              <h2>Financials</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <canvas id="canvasDoughnut"></canvas>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
</style>
