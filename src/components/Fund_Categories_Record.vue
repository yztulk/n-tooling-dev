<template>
  <div id="existingFundCategory">

    <div class="page-title">
      <div class="title_left">
        <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span><router-link to="/Plans"> Plans</router-link> > <router-link to="/ExistingPlan">{{formInput.clientId}}</router-link> > {{formInput.fundCategoryNumber}}</h3>
      </div>
      <div class="title_right">
        <div class="pull-right">
          <div class="input-group">
            <div class="btn-group">
              <router-link to="/NewPlan"><button type="button" class="btn btn-default">New</button></router-link>
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
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Plan</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <!-- <router-link to="/ExistingPlan" class="btn">{{formInput.planId}}</router-link> -->
                  <router-link :to="{ name: 'ExistingPlan', params: {planId : formInput.planId}}" class="btn">
                    {{formInput.planId}}
                  </router-link>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Status</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.status" type="text" class="form-control">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Client</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <router-link to="/ExistingContact" class="btn">{{formInput.clientId}}</router-link>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Category</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <router-link to="/ExistingContact" class="btn">{{formInput.categoryId}}</router-link>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Fund Source</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <router-link to="/ExistingContact" class="btn">{{formInput.fundSourceId}}</router-link>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Price Book</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <router-link to="/ExistingContact" class="btn">{{formInput.pricebookId}}</router-link>
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Financial Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Total Budget</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.totalBudget" type="text" class="form-control" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Available</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.available" type="text" class="form-control" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Committed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.committed" type="text" class="form-control" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Consumed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.consumed" type="text" class="form-control" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Invoiced</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.invoiced" type="text" class="form-control" readonly="readonly">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Claimed</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.claimed" type="text" class="form-control" readonly="readonly">
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
                    <button type="button" class="btn btn-primary">Save Account</button>
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
                  <h4 class="panel-title"><span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span> Support Items ({{supportItems.length}})</h4>
                </a>
                <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="supportItem in supportItems">
                          <td>
                            <router-link :to="{ name: 'ExistingSupportItem', params: {supportItemId : supportItem.support_item_number}}">
                              {{ supportItem.support_item_number }}
                            </router-link>
                          </td>
                          <td>TODO</td>
                          <td>{{ supportItem.quantity }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/NewSupportItem"><button type="submit" class="btn btn-default">New Support Item</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingTwo1" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-adjust" aria-hidden="true"></span> Fund Adjustments (3)</h4>
                </a>
                <div id="collapseTwo1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Source</th>
                          <th>Type</th>
                          <th>Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">0018219</th>
                          <td>Aspect</td>
                          <td>1st Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018220</th>
                          <td>Aspect</td>
                          <td>2nd Goal</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">0018221</th>
                          <td>NDIS</td>
                          <td>Long Term</td>
                          <td>High</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">New Fund Adjustment</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingThree1" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-file" aria-hidden="true"></span> Attachments (0)</h4>
                </a>
                <div id="collapseThree1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="panel-body">
                    <p><strong>Collapsible Item 3 data</strong>
                    </p>
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
          status: '',
          fundCategoryNumber: '',
          planId: '',
          clientId: '',
          fundSourceId: '',
          pricebookId: '',
          categoryId: '',
          totalBudget: '',
          available: '',
          committed: '',
          consumed: '',
          invoiced: '',
          claimed: '',
        },

        supportItems: [],
        fundAdjustments: [],
        attachments: []
      }
    },

    methods : {
      saveFundCategory: function(){
        axios.post('/saveFundCategory', this.formInput)
        .then(response => {
          this.$router.push('/ExistingPlan/' + response.data.supportItemId);
        })
        .catch(e => {
          console.log(e);
        })
      }
    },

    mounted(){
      console.log('mount: fund category record component');
      var fundCategoryId = this.$route.params.fundCategoryId; 

      //Get fund category
      axios.get('/getFundCategory', {
        params : {
          fundCategoryId : fundCategoryId
        }
      })
      .then(response => {
        var data = response.data;
        console.log(data);

        this.formInput.status = data.status;
        this.formInput.fundCategoryNumber = data.fund_category_number;
        this.formInput.planId = data.plan_id;
        this.formInput.clientId = data.client_id;
        // this.formInput.fundSourceId = data.fund_source_id;
        this.formInput.pricebookId = data.pricebook_id;
        this.formInput.categoryId = data.category_id;
        this.formInput.totalBudget = data.total_budget;
        this.formInput.available = data.available;
        this.formInput.committed = data.committed;
        this.formInput.consumed = data.consumed;
        this.formInput.invoiced = data.invoiced;
        this.formInput.claimed = data.claimed;
      })
      .catch(e => {
        console.log(e);
      })

      //Get support item
      axios.get('/getFundCategorySupportItems', {
        params : {
          fundCategoryId : fundCategoryId
        }
      })
      .then(response => {
        console.log(response.data);
        this.supportItems = response.data;
      })
      .catch(e => {
        console.log(e);
      })

      //Get fund adjustments
      // axios.get('/getFundAdjustments', {
      //   params : {
      //     fundCategoryId : fundCategoryId
      //   }
      // })
      // .then(response => {
      //   console.log(response.data);
      //   this.fundAdjustments = response.data;
      // })
      // .catch(e => {
      //   console.log(e);
      // })

    }
  }
</script>

<style scoped>
</style>
