<template>
  <div id="existingLead">

    <div class="page-title">
      <div class="title_left">
        <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span><router-link to="/Leads"> Leads</router-link> > Roy Bout</h3>
      </div>
      <div class="title_right">
        <div class="pull-right">
          <div class="input-group">
            <div class="btn-group">
              <router-link to="/NewLead"><button type="button" class="btn btn-default">New</button></router-link>
              <button type="button" class="btn btn-default">Clone</button>
              <button type="button" class="btn btn-default">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>

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
                <label class="control-label col-md-3 col-sm-3 col-xs-12">First Name <span class="required">*</span></label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="Roy">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Date of Birth</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="02-04-1976">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Middle Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess4" value="roybout@gmail.com">
                  <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Last Name <span class="required">*</span></label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="Bout">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Mobile</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess5" value="0425193822">
                  <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">NDIS Nr.</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="7282872">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Phone</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess5" placeholder="">
                  <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>


              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Enquirer Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />
              <!-- <div class="ln_solid"></div> -->

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">First Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="Bep">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Date of Birth</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="01-01-1956">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Middle Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess4" value="bep@gmail.com">
                  <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Last Name</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="Bout">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Mobile</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess5" value="042718732">
                  <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">NDIS #</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control" value="">
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Phone</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess5" placeholder="">
                  <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>

              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>Intake Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Aboriginal</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" class="flat" checked>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Interpreter</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" class="flat" checked>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Language</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <select class="form-control">
                    <option value="None">None</option>
                    <option value="English" selected>English</option>
                    <option value="Dutch">Dutch</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Country</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <select class="form-control">
                    <option value="None">None</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU" selected>Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Democratic Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>


              <span class="clearfix"></span>

              <br />
              <div class="x_title">
                <h2>System Information</h2> 
                <div class="clearfix"></div>
              </div>
              <br />

              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Stage</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <select class="form-control">
                    <option value="None">New</option>
                    <option value="English">Pre-Qualify</option>
                    <option value="Dutch">Assigned</option>
                    <option value="Dutch">Nurture</option>
                    <option value="Dutch">Closed Lost</option>
                    <option value="Dutch">Converted</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Lead Owner</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control has-feedback-left" id="inputSuccess2" value="Roy Bout">
                  <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
                </div>
              </div>


              <span class="clearfix"></span>


              <div class="form-group">
                <!-- <div class="col-xs-12 col-md-offset-3"> -->
                  <button type="button" class="btn btn-primary">Save Changes</button>
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
                  <!-- <h4 class="panel-title">Possible Duplications (3)</h4> -->
                  <h4 class="panel-title"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Possible Duplications (3)</h4>
                </a>
                <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingTwo1" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-file" aria-hidden="true"></span> Attachments (2)</h4>
                </a>
                <div id="collapseTwo1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
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
                    <router-link to="/NewLead"><button type="submit" class="btn btn-default">Add Attachment</button></router-link>
                  </div>
                </div>
              </div>
              <div class="panel">
                <a class="panel-heading collapsed" role="tab" id="headingThree1" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                  <h4 class="panel-title"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Notes (0)</h4>
                </a>
                <div id="collapseThree1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="panel-body">
                    <p><strong>Collapsible Item 3 data</strong>
                    </p>
                    <router-link to="/NewLead"><button type="submit" class="btn btn-default">Add Note</button></router-link>
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
