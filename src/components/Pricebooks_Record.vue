<template>
  <div id="existingProduct">

    <div class="page-title">
      <div class="title_left">
        <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span><router-link to="/Products"> Price Book</router-link> > Exercice physiology</h3>
      </div>

      <div class="title_right">
        <div class="pull-right">
          <div class="input-group">
            <div class="btn-group">
              <router-link to="/NewProduct"><button type="button" class="btn btn-default">New</button></router-link>
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
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.name" type="text" class="form-control" value="Exercice physiology">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Active</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.active" type="text" class="form-control" value="Active">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Code</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.code" type="text" class="form-control" value="15_982_982_01">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Family</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.family" type="text" class="form-control" value="NDIS">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Description</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.description" type="text" class="form-control" value="">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Quote</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input v-model="formInput.quote" type="text" class="form-control" value="No">
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
                    <button type="button" class="btn btn-primary">Save Product</button>
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
                  <h4 class="panel-title"><span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span> Support Items (3)</h4>
                </a>
                <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Fund Source</th>
                          <th>NDIS Category</th>
                          <th>Total Budget</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><router-link to="/ExistingSupportItem">0037287</router-link></th>
                          <td>NDIS Managed</td>
                          <td>Assistive Technology</td>
                          <td>$150,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><router-link to="/ExistingSupportItem">0037288</router-link></th>
                          <td>Thrid Party Managed</td>
                          <td>Improved Learning</td>
                          <td>$10,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><router-link to="/ExistingSupportItem">0037289</router-link></th>
                          <td>Thrid Party Managed</td>
                          <td>Improved Daily Living Skills</td>
                          <td>$5,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link to="/ExistingFundCategory"><button type="submit" class="btn btn-default">Add Support Item</button></router-link>
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
          name : '',
          code : '',
          description : '',
          active : '',
          family : '',
          quote : ''
        }
      }
    },

    mounted(){
      axios.get('/getProduct', {
        params : {
          productCode : this.$route.params.productCode  
        }
      })
      .then(response => {
        var data = response.data;
        this.formInput.name  = data.name;
        this.formInput.code  = data.code;
        this.formInput.description  = data.description;
        this.formInput.active  = data.active;
        this.formInput.family  = data.family;
        this.formInput.quote  = data.quote;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
</script>

<style scoped>
</style>
