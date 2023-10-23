import React from "react";
import CardHeaderDropdown from "../home/cardheaderdropdown";
import countryData from "../../data/_countryCode";
import BreadcamMenu from "../common/breadcamMenu";

const WrapSetting = () => {
  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper">
        <div className="breadcrumb__area">
          <div className="breadcrumb__wrapper mb-35">
            <div className="breadcrumb__main">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <BreadcamMenu title="Account Settings" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="setting__area">
              <div className="body__card-wrapper mb-20">
                <div className="card__header-top">
                  <div className="card__title-inner">
                    <h4 className="event__information-title">
                      Account Information
                    </h4>
                  </div>
                  <CardHeaderDropdown />
                </div>
                <div className="setting__main-wrapper pt-25">
                  <form action="#">
                    <div className="singel__input-field mb-15">
                      <label className="input__field-text">First Name</label>
                      <input type="text" placeholder="David" />
                    </div>
                    <div className="singel__input-field mb-15">
                      <label className="input__field-text">Last Name</label>
                      <input type="text" placeholder="Smith khan" />
                    </div>
                    <div className="singel__input-field mb-15">
                      <label className="input__field-text">Email Address</label>
                      <input type="email" placeholder="Info@email.com" />
                    </div>
                    <div className="singel__input-field mb-15">
                      <label className="input__field-text">Phone Number</label>
                      <div className="input__number">
                        <div className="singel__input-field mb-15">
                          <div className="input__number-lang">
                            <div className="contact__select">
                              <select name="countryCode">
                                <option data-countrycode="GB" defaultValue="44">
                                  UK (+44)
                                </option>
                                <option data-countrycode="US" defaultValue="1">
                                  USA (+1)
                                </option>
                                <optgroup label="Other countries">
                                  {countryData.length > 0 &&
                                    countryData.map((country, index) => (
                                      <option
                                        key={index}
                                        data-countrycode={country.code}
                                        defaultValue={country.phoneCode}
                                      >
                                        {country.name} (+{country.phoneCode})
                                      </option>
                                    ))}
                                </optgroup>
                              </select>
                            </div>
                            <div className="input__tel">
                              <input type="tel" placeholder="003 669 032" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="singel__input-field mb-15">
                      <label className="input__field-text">Gendar</label>
                      <div className="contact__select">
                        <select>
                          <option defaultValue="volvo">Male</option>
                          <option defaultValue="saab">Female</option>
                          <option defaultValue="mercedes">Other </option>
                        </select>
                      </div>
                    </div>
                    <div className="event__input mb-15">
                      <label className="input__field-text">Language</label>
                      <div className="contact__select">
                        <select>
                          <option defaultValue="AF">Afrikaans</option>
                          <option defaultValue="SQ">Albanian</option>
                          <option defaultValue="AR">Arabic</option>
                          <option defaultValue="HY">Armenian</option>
                          <option defaultValue="EU">Basque</option>
                          <option defaultValue="BN">Bengali</option>
                          <option defaultValue="BG">Bulgarian</option>
                          <option defaultValue="CA">Catalan</option>
                          <option defaultValue="KM">Cambodian</option>
                          <option defaultValue="ZH">Chinese (Mandarin)</option>
                          <option defaultValue="HR">Croatian</option>
                          <option defaultValue="CS">Czech</option>
                          <option defaultValue="DA">Danish</option>
                          <option defaultValue="NL">Dutch</option>
                          <option defaultValue="EN">English</option>
                          <option defaultValue="ET">Estonian</option>
                          <option defaultValue="FJ">Fiji</option>
                          <option defaultValue="FI">Finnish</option>
                          <option defaultValue="FR">French</option>
                          <option defaultValue="KA">Georgian</option>
                          <option defaultValue="DE">German</option>
                          <option defaultValue="EL">Greek</option>
                          <option defaultValue="GU">Gujarati</option>
                          <option defaultValue="HE">Hebrew</option>
                          <option defaultValue="HI">Hindi</option>
                          <option defaultValue="HU">Hungarian</option>
                          <option defaultValue="IS">Icelandic</option>
                          <option defaultValue="ID">Indonesian</option>
                          <option defaultValue="GA">Irish</option>
                          <option defaultValue="IT">Italian</option>
                          <option defaultValue="JA">Japanese</option>
                          <option defaultValue="JW">Javanese</option>
                          <option defaultValue="KO">Korean</option>
                          <option defaultValue="LA">Latin</option>
                          <option defaultValue="LV">Latvian</option>
                          <option defaultValue="LT">Lithuanian</option>
                          <option defaultValue="MK">Macedonian</option>
                          <option defaultValue="MS">Malay</option>
                          <option defaultValue="ML">Malayalam</option>
                          <option defaultValue="MT">Maltese</option>
                          <option defaultValue="MI">Maori</option>
                          <option defaultValue="MR">Marathi</option>
                          <option defaultValue="MN">Mongolian</option>
                          <option defaultValue="NE">Nepali</option>
                          <option defaultValue="NO">Norwegian</option>
                          <option defaultValue="FA">Persian</option>
                          <option defaultValue="PL">Polish</option>
                          <option defaultValue="PT">Portuguese</option>
                          <option defaultValue="PA">Punjabi</option>
                          <option defaultValue="QU">Quechua</option>
                          <option defaultValue="RO">Romanian</option>
                          <option defaultValue="RU">Russian</option>
                          <option defaultValue="SM">Samoan</option>
                          <option defaultValue="SR">Serbian</option>
                          <option defaultValue="SK">Slovak</option>
                          <option defaultValue="SL">Slovenian</option>
                          <option defaultValue="ES">Spanish</option>
                          <option defaultValue="SW">Swahili</option>
                          <option defaultValue="SV">Swedish </option>
                          <option defaultValue="TA">Tamil</option>
                          <option defaultValue="TT">Tatar</option>
                          <option defaultValue="TE">Telugu</option>
                          <option defaultValue="TH">Thai</option>
                          <option defaultValue="BO">Tibetan</option>
                          <option defaultValue="TO">Tonga</option>
                          <option defaultValue="TR">Turkish</option>
                          <option defaultValue="UK">Ukrainian</option>
                          <option defaultValue="UR">Urdu</option>
                          <option defaultValue="UZ">Uzbek</option>
                          <option defaultValue="VI">Vietnamese</option>
                          <option defaultValue="CY">Welsh</option>
                          <option defaultValue="XH">Xhosa</option>
                        </select>
                      </div>
                    </div>
                    <div className="event__input mb-15">
                      <label className="input__field-text">Address</label>
                      <textarea name="Address" placeholder=""></textarea>
                    </div>
                    <div className="popup__update">
                      <label>Upload Image ( 200x200px )</label>
                      <input type="file" name="img" accept="image/*" />
                    </div>
                    <div className="input__btn-wrapper">
                      <button className="unfield__input-btn" type="submit">
                        Profile Reset
                      </button>
                      <button className="input__btn" type="submit">
                        Profile Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapSetting;
