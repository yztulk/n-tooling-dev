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
              <!-- <p class="text-muted font-13 m-b-30">
                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>
              </p> -->
              <table id="datatable" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Unit of Measure</th>
                    <th>Product Family</th>
                    <th>Quote</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><router-link to="/ExistingProduct">Exercice physiology</router-link></td>
                    <td>15_982_982_01</td>
                    <td></td>
                    <td>Hour</td>
                    <td>NDIS</td>
                    <td>No</td>
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
