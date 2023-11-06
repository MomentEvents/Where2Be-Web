import React, { useContext, useEffect, useState } from "react";
import CardHeaderDropdown from "../home/cardheaderdropdown";
import profileThumb from "../../public/assets/img/speaker/list/04.jpg";
import Link from "next/link";
import BreadcamMenu from "../common/breadcamMenu";
import supabase from "../../lib/supabase";
import { AppContext } from "../../context/AppContext";
const ProfileContent = () => {
  const { currentUser } = useContext(AppContext);
  const [currentUserPicture, setCurrentUserPicture] = useState();

  useEffect(() => {
    if (currentUser) {
      const { data } = supabase.storage
        .from("user-pictures")
        .getPublicUrl(currentUser.picture);
      console.log(data.publicUrl);
      setCurrentUserPicture(data.publicUrl);
    }
  }, [currentUser]);
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
                <BreadcamMenu title="Profile" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="profile__area">
              <div className="body__card-wrapper mb-20">
                <div className="card__header-top">
                  <div className="card__title-inner">
                    <h4 className="event__information-title">
                      Profile Information
                    </h4>
                  </div>
                </div>
                <div className="profile__main-wrapper mt-35">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                      <div className="profile__left">
                        <div className="padding__left-inner p-relative">
                          <div className="profile__thumb mb-45">
                            <img
                              src={currentUserPicture}
                              alt="image not found"
                            />
                          </div>
                          <div className="profile__user">
                            <ul>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Name:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>{currentUser?.name}</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Email Address:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>{currentUser?.email}</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Joined:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>
                                      {currentUser?.created_at
                                        ? new Date(
                                            currentUser.created_at
                                          ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          })
                                        : ""}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                      <div className="profile__right p-relative">
                        <Link legacyBehavior href="/setting">
                          <div className="profile__edit">
                            <i className="flaticon-edit"></i>
                          </div>
                        </Link>
                        <div className="profile__about-info">
                          <span className="profile__title">About Me</span>
                          <div className="profile__text">
                            <p className="mb-25">{currentUser?.about_me}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
