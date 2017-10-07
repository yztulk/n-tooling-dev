<template>
  <div id="existingSupportItem">

    <div class="page-title">
      <div class="title_left">
        <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span><router-link to="/SupportItems"> Support Items</router-link> > {{formInput.number}}</h3>
      </div>

      <div class="title_right">
        <div class="pull-right">
          <div class="input-group">
            <div class="btn-group">
              <router-link to="/NewSupportItem"><button type="button" class="btn btn-default">New</button></router-link>
              <button type="button" class="btn btn-default">Clone</button>
              <button type="button" class="btn btn-default">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br />

    <div class="row">
      <div class="col-md-7 col-xs-12">
          <div class="x_panel">

            <div class="x_title">
              <h2>Basic Details</h2> 
              <div class="clearfix"></div>
            </div>

            <div class="x_content">
              <br />
              <form class="form-horizontal form-label-left">
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Number</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.number" type="text" class="form-control" value="0037287" readonly="readonly">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Product</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.product" type="text" class="form-control" value="Speech Therapy">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Fund Category</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.fundCategory" type="text" class="form-control" value="NDIS Managed">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Quantity of Measure</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.quantityOfMeasure" type="text" class="form-control" value="Hour" readonly="readonly">
                  </div>
                </div>

                <span class="clearfix"></span>

                <br />
                <div class="x_title">
                  <h2>Quanity and Prices</h2> 
                  <div class="clearfix"></div>
                </div>
                <br />

                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Quantity</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.quantity" type="text" class="form-control" value="">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">List Price</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.listPrice" type="text" class="form-control" value="$" readonly="readonly">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Total Price</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <input v-model="formInput.totalPrice" type="text" class="form-control" value="$" readonly="readonly">
                    </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Sale Price</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.salePrice" type="text" class="form-control" value="">
                  </div>
                </div>

                <span class="clearfix"></span>

                <br />
                <div class="x_title">
                  <h2>Financials</h2> 
                  <div class="clearfix"></div>
                </div>
                <br />

                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Committed</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.committed" type="text" class="form-control" value="" readonly="readonly">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Consumed</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.consumed" type="text" class="form-control" value="" readonly="readonly">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Invoiced</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.invoiced" type="text" class="form-control" value="" readonly="readonly">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Claimed</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.claimed" type="text" class="form-control" value="" readonly="readonly">
                  </div>
                </div>

                <span class="clearfix"></span>

                <br />
                <div class="x_title">
                  <h2>Job Information</h2> 
                  <div class="clearfix"></div>
                </div>
                <br />

                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">Late Cancellation Count</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.lateCancellationCount" type="text" class="form-control" value="" readonly="readonly">
                  </div>
                </div>
                <div class="col-md-6 form-group">
                  <label class="control-label col-md-3 col-sm-3 col-xs-12">No Show Count</label>
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <input v-model="formInput.noShowCount" type="text" class="form-control" value="" readonly="readonly">
                  </div>
                </div>

                <span class="clearfix"></span>

                <br />
                <div class="x_title">
                  <h2>Other Information</h2> 
                  <div class="clearfix"></div>
                </div>
                <br />
                <!-- <div class="ln_solid"></div> -->

                  <div class="x_content">
                    <div id="alerts"></div>
                    <div class="btn-toolbar editor" data-role="editor-toolbar" data-target="#editor-one">
                      <div class="btn-group">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a>
                        <ul class="dropdown-menu">
                        </ul>
                      </div>

                      <div class="btn-group">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li>
                            <a data-edit="fontSize 5">
                              <p style="font-size:17px">Huge</p>
                            </a>
                          </li>
                          <li>
                            <a data-edit="fontSize 3">
                              <p style="font-size:14px">Normal</p>
                            </a>
                          </li>
                          <li>
                            <a data-edit="fontSize 1">
                              <p style="font-size:11px">Small</p>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="btn-group">
                        <a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a>
                        <a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a>
                        <a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a>
                        <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a>
                      </div>

                      <div class="btn-group">
                        <a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a>
                        <a class="btn" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a>
                        <a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-dedent"></i></a>
                        <a class="btn" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a>
                      </div>

                      <div class="btn-group">
                        <a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a>
                        <a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a>
                        <a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a>
                        <a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a>
                      </div>

                      <div class="btn-group">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a>
                        <div class="dropdown-menu input-append">
                          <input class="span2" placeholder="URL" type="text" data-edit="createLink" />
                          <button class="btn" type="button">Add</button>
                        </div>
                        <a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a>
                      </div>

                      <div class="btn-group">
                        <a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a>
                        <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />
                      </div>

                      <div class="btn-group">
                        <a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a>
                        <a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a>
                      </div>
                    </div>

                    <div id="editor-one" class="editor-wrapper"></div>

                    <textarea name="descr" id="descr" style="display:none;"></textarea>
                    
                    <br />
                  </div>
                  <div class="form-group">
                    <!-- <div class="col-xs-12 col-md-offset-3"> -->
                      <button type="button" class="btn btn-primary">Save Support Item</button>
                    <!-- </div> -->
                  </div>

              </form>
            </div>
          </div>
      </div>
      <div class="col-md-5 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2><i class="fa fa-align-left"></i> Related Information</h2>
          <div class="clearfix"></div>
          </div>
          <div class="x_content">

            <!-- start accordion -->
            <div class="accordion" id="accordion1" role="tablist" aria-multiselectable="true">
              <div class="panel">
                <a class="panel-heading" role="tab" id="headingOne1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span> Jobs ({{jobs.length}})</h4>
                </a>
                <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Therapist</th>
                          <th>Start Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="job in jobs">
                          <td>
                            <router-link :to="{ name: 'ExistingJob', params: {jobId : job.job_number}}">
                              {{ job.job_number }}
                            </router-link>
                          </td>
                          <td>TODO</td>
                          <td>TODO</td>
                          <td>{{ job.status }}</td>
                        </tr>

                        <!-- <tr>
                          <th scope="row">0037287</th>
                          <td>Jan Boer</td>
                          <td>07-28-2017</td>
                          <td>Queued</td>
                        </tr>
                        <tr>
                          <th scope="row">0037288</th>
                          <td>Jan Boer</td>
                          <td>06-28-2017</td>
                          <td>Queued</td>
                        </tr>
                        <tr>
                          <th scope="row">0037289</th>
                          <td>Jan Boer</td>
                          <td>05-28-2017</td>
                          <td>Complete</td>
                        </tr> -->
                      </tbody>
                    </table>
                    <router-link to="/NewJob"><button type="submit" class="btn btn-default">Add Job</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingThree1" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-file" aria-hidden="true"></span> Attachments (2)</h4>
                </a>
                <div id="collapseThree1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Size</th>
                          <th>Upload Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Identity Proof.pdf</td>
                          <td>1.1MB</td>
                          <td>10-02-2017</td>
                        </tr>
                        <tr>
                          <td>AVO.docx</td>
                          <td>237kb</td>
                          <td>17-08-2017</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">New Attachment</button></router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- end of accordion -->
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
        formInput : {
          number: '',
          fundCategory: '',
          product: '',
          quantityOfMeasure: '',
          quantity: '',
          totalPrice: '',
          listPrice: '',
          salePrice: '',
          committed: '',
          consumed: '',
          invoiced: '',
          claimed: '',
          lateCancellationCount: '',
          noShowCount: ''
        },
        jobs: []
      }
    },

    methods : {
      saveSupportItem: function(){
        axios.post('/insertSupportItem', this.formInput)
        .then(response => {
          this.$router.push('/ExistingSupportItem/' + response.data.supportItemId);
        })
        .catch(e => {
          console.log(e);
        })
      }
    },

    mounted(){
      var supportItemId = this.$route.params.supportItemId;

      //Get support item
      axios.get('/getSupportItem', {
        params : {
          supportItemId : supportItemId
        }
      })
      .then(response => {
        var data = response.data;
        console.log(data);

        this.formInput.number  = data.support_item_number;
        //this.formInput.fundCategory  = data.;
        //this.formInput.product  = data.;
        //this.formInput.quantityOfMeasure  = data.;
        this.formInput.quantity  = data.quantity;
        this.formInput.totalPrice  = data.total_price;
        this.formInput.listPrice  = data.list_price;
        this.formInput.salePrice  = data.sale_price;
        this.formInput.committed  = data.committed;
        this.formInput.consumed  = data.consumed;
        this.formInput.invoiced  = data.invoiced;
        this.formInput.claimed  = data.claimed;
        this.formInput.lateCancellationCount  = data.late_cancellation_count;
        this.formInput.noShowCount  = data.no_show_count;
      })
      .catch(e => {
        console.log(e);
      })

      //Get jobs
      axios.get('/getSupportItemJobs', {
        params : {
          supportItemId : supportItemId
        }
      })
      .then(response => {
        console.log(response.data);
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
