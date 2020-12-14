import React, { useState } from "react"
import "../staticrab/homepage/_next/static/css/e669fd7b.1cca57d5.chunk.css"
import "../staticrab/homepage/_next/static/css/commons.1c7e47f9.chunk.css"
import "../staticrab/homepage/_next/static/css/bcd32be27f5b1478829a567d61b9adee27f2c5cd_CSS.c07ae2c2.chunk.css"
import "../staticrab/homepage/_next/static/css/styles.df2d901f.chunk.css"
import "../staticrab/homepage/_next/static/css/map.css"
import "../staticrab/homepage/_next/static/css/c7c8783d.2c853228.chunk.css"
import "../staticrab/homepage/_next/static/css/0866728f57686295a6a18be9f7b053bb16e13021_CSS.fb156972.chunk.css"
import BorderlessPhone from "../staticrab/homepage/_next/static/images/borderless-phone-32fab951adaf29c41db9463191e38ccc.jpg"
import AppStore from "../staticrab/homepage/_next/static/images/us-2928664fe1fc6aca88583a6f606d60ba.svg"
import PlayStore from "../staticrab/homepage/_next/static/images/en-a53de91e2a5d94b0be6af17b03224217.svg"
import ReactImageVideoLightbox from "react-image-video-lightbox"
import Person22 from "../staticrab/homepage/_next/static/images/person_22-bc50bc1a346cba30fb6e407ac67a0667.jpg"
import Person9 from "../staticrab/homepage/_next/static/images/person_9-c26aad8759c5efce2161ddd522bc2a01.jpg"
import Person10 from "../staticrab/homepage/_next/static/images/person_10-b1205d9bad12cb4a21f8e282e2bb2631.jpg"
import Person11 from "../staticrab/homepage/_next/static/images/person_11-00cea33579acb782b7c3117d1f7cfd40.jpg"
import Person12 from "../staticrab/homepage/_next/static/images/person_12-1baedd7f4cd7c73b7f3d9bbdd4590afc.jpg"
import Person13 from "../staticrab/homepage/_next/static/images/person_13-c2122cf06d2eb705e98d0d3d19ecf80f.jpg"
import Person14 from "../staticrab/homepage/_next/static/images/person_14-846e74d3a2d100fa1cf372baaf952ab3.jpg"
import Person1 from "../staticrab/homepage/_next/static/images/person_1-c67d50b951a7e1a3d5d72237ade0cf14.jpg"
import Person2 from "../staticrab/homepage/_next/static/images/person_2-93085cd6a64be68405efcb239689acda.jpg"
import Person3 from "../staticrab/homepage/_next/static/images/person_3-1db3c650323bb8995c95a917fc47f993.jpg"
import Person4 from "../staticrab/homepage/_next/static/images/person_4-fa5dd84167ab3c4d9fed376d6f49a587.jpg"
import Person5 from "../staticrab/homepage/_next/static/images/person_5-be82fc2ce9ea69c4c325526748211823.jpg"
import Person6 from "../staticrab/homepage/_next/static/images/person_6-566d5f67978025ac424ee5d819c8af6b.jpg"
import Person7 from "../staticrab/homepage/_next/static/images/person_7-54f69ec095ce4601e2d963c092b1dfd6.jpg"
import Person8 from "../staticrab/homepage/_next/static/images/person_8-3579374f699f5fe66c9f949395df90f7.jpg"
import Person15 from "../staticrab/homepage/_next/static/images/person_15-2c2e24621c42972e306dfe244227fcd9.jpg"
import Person16 from "../staticrab/homepage/_next/static/images/person_16-f221b24fc37acca2e1edf3ec5bb4dd99.jpg"

const AboutUs = () => {
  const [lightbox, setLightbox] = useState({
    lightboxOpen: false,
  })

  return (
    <div>
      <header
        className="navbar navbar-inverse navbar-static-top bg-primary"
        id="top"
      >
        <div className="container">
          <div className="navbar-header pull-xs-left">
            <button
              className="navbar-toggle collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a
              href="https://swissTransfer.com"
              className="navbar-brand hidden-md hidden-sm hidden-xs"
            >
              swissTransfer
            </a>
            <a
              href="https://swissTransfer.com"
              className="logo-text logo-text-inverse visible-xs-block visible-sm-block"
              title="swissTransfer"
            />
            <a
              href="https://swissTransfer.com"
              className="flag flag-info visible-md-block"
              title="swissTransfer"
            />
          </div>
          <div className="navbar-btn pull-xs-right">
            <a
              href="https://swissTransfer.com/register?utm_medium=lienzo&utm_campaign=head_cta"
              className="btn btn-primary"
            >
              Sign up
            </a>
          </div>
          <nav
            id="navbar"
            className="collapse navbar-collapse navbar-collapse-with-panel"
          >
            <a
              className="cover collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
            />
            <div className="navbar-collapse-panel orderable-xs orderable-sm">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown" tabIndex={-1}>
                  <button className="dropdown-toggle">
                    <span
                      className="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 23a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-5a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM18.89 6.18L17 1.38a.53.53 0 0 0-.27-.28.5.5 0 0 0-.38 0L11.5 3l.38.93 3.68-1.49-5.1 12 .92.39 5.1-12L18 6.55z"></path>
                      </svg>
                    </span>
                    <span className="tw-public-navigation-item-content__text text-ellipsis">
                      Send money
                    </span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com"
                      >
                        Send money
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/#chart"
                      >
                        Get the real exchange rate
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/#b-transfer-map-light"
                      >
                        See our coverage
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/pricing"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" tabIndex={-1}>
                  <button className="dropdown-toggle">
                    <span
                      className="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 23a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-5a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM11.79 13.75l5.1-12-.89-.38-5.1 12-1.51-3.69-.93.38 1.94 4.8a.51.51 0 0 0 .46.31.41.41 0 0 0 .19 0l4.8-1.94-.38-.92z"></path>
                      </svg>
                    </span>
                    <span className="tw-public-navigation-item-content__text text-ellipsis">
                      Receive money
                    </span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/"
                      >
                        <span>Get a multi-currency account</span>
                        <span className="badge badge-success m-l-1">New</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/#get-paid"
                      >
                        Get international bank details
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/#borderless-explainer-video"
                      >
                        How it works
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/pricing"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" tabIndex={-1}>
                  <button className="dropdown-toggle">
                    <span
                      className="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 15h17v1H3zM8 13H3V9h5zm-4-1h3v-2H4zM20 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"></path>
                        <path d="M24 20H0V4h24v9.94l-.33.12a1 1 0 0 0 0 1.88l.33.12zM1 19h22v-2.27a2 2 0 0 1 0-3.46V5H1z"></path>
                      </svg>
                    </span>
                    <span className="tw-public-navigation-item-content__text text-ellipsis">
                      Debit card
                    </span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/#card"
                      >
                        <span>Get a swissTransfer Mastercard®</span>
                        <span className="badge badge-success m-l-1">New</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/#price-comp"
                      >
                        Compare swissTransfer to banks
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/#borderless-explainer-video"
                      >
                        How it works
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/multi-currency-account/pricing"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" tabIndex={-1}>
                  <button className="dropdown-toggle">
                    <span
                      className="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 11V5h-7.55a4.48 4.48 0 0 0-8.9 0H0v16h24v-9.87V11zM12 2a3.5 3.5 0 0 1 3.45 3h-6.9A3.5 3.5 0 0 1 12 2zm11 4v5.06A5 5 0 0 1 18 16H6a5 5 0 0 1-5-5V6zm0 14H1v-5.7a6.21 6.21 0 0 0 .77.94A6 6 0 0 0 6 17h12a6.06 6.06 0 0 0 5-2.68z"></path>
                        <circle cx={12} cy={14} r={1} />
                      </svg>
                    </span>
                    <span className="tw-public-navigation-item-content__text text-ellipsis">
                      Business
                    </span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/business/"
                      >
                        <span>swissTransfer for Business</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/business/pricing-and-coverage"
                      >
                        Business pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/business/api"
                      >
                        Open API
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/business/payouts"
                      >
                        Mass payouts
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/business/banks"
                      >
                        swissTransfer for Banks
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" tabIndex={-1}>
                  <button className="dropdown-toggle">
                    <span
                      className="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                        <path d="M11.24 13.9a1.69 1.69 0 0 1 .14-.68 2.83 2.83 0 0 1 .36-.59 3.85 3.85 0 0 1 .51-.58c.19-.19.39-.4.59-.63l.5-.55a3.71 3.71 0 0 0 .44-.54 3.54 3.54 0 0 0 .3-.62A2.4 2.4 0 0 0 14 8.05a1.78 1.78 0 0 0-.49-.66A2.07 2.07 0 0 0 12.8 7a2.91 2.91 0 0 0-2.2.17 2.7 2.7 0 0 0-1.06.9l-.7-.56a3.64 3.64 0 0 1 1.36-1.13A4.12 4.12 0 0 1 12 6a3.88 3.88 0 0 1 1.24.2 3.19 3.19 0 0 1 1 .58 2.8 2.8 0 0 1 .68.93 2.84 2.84 0 0 1 .26 1.22 3.37 3.37 0 0 1-.13.93 3.18 3.18 0 0 1-.35.77 4 4 0 0 1-.5.67 8.21 8.21 0 0 1-.58.6c-.18.19-.36.36-.54.53a3.89 3.89 0 0 0-.48.52 2.87 2.87 0 0 0-.36.57 1.44 1.44 0 0 0-.14.65v.61h-.8zm.46 4.1a.78.78 0 0 1-.54-.2.65.65 0 0 1-.22-.51.63.63 0 0 1 .22-.5.75.75 0 0 1 .54-.21.77.77 0 0 1 .55.21.67.67 0 0 1 .22.5.69.69 0 0 1-.22.51.81.81 0 0 1-.55.2z"></path>
                      </svg>
                    </span>
                    <span className="tw-public-navigation-item-content__text text-ellipsis">
                      About
                    </span>
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/help"
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/pricing"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/mid-market-rate"
                      >
                        Mid-market rate
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-ellipsis"
                        href="https://swissTransfer.com/gb/about/our-story"
                      >
                        Our story
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://swissTransfer.com/login">
                    <span
                      className="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 24H8v-3.57h1V23h12V1H9v2.57H8V0h14v24z" />
                        <path d="M13.03 5.99l-.71.71 4.8 4.8H0v1h17.12l-4.8 4.8.71.71L19.04 12l-6.01-6.01z"></path>
                      </svg>
                    </span>
                    <span className="tw-public-navigation-item-content__text text-ellipsis">
                      Log in
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <a
              role="button"
              className="navbar-toggle close"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="true"
            >
              ×
            </a>
          </nav>
        </div>
      </header>
      <section>
        <div
          className="jumbotron-image bg-primary"
          style={{
            backgroundImage:
              "url(https://lienzo.s3.amazonaws.com/images/570ce76304ed3-Speedflaggradient3.jpg)",
          }}
          id={0}
        >
          <div className="jumbotron jumbotron-cta jumbotron-mobile">
            <div className="container">
              <div className="row">
                <div className="text-xs-left col-md-12 col-lg-8">
                  <h1>The swissTransfer story</h1>
                  <p className="lead">
                    swissTransfer was launched in 2011 with the vision of making
                    international money transfers cheap, fair, and simple.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="lead-scroll hidden-md hidden-lg hidden-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M17.3 15.82l-4.8 4.8V2h-1v18.62l-4.8-4.8-.71.7L12 22.54l6.01-6.02-.71-.7z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <section id={1} className="section">
          <div className="container">
            <div className="row vertical-align-center">
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-md-5 text-md-left col-md-offset-0"
              >
                <div className="media-container m-b-4 center-block hidden-md hidden-lg hidden-xl media-container-shadow">
                  <img
                    src="https://lienzo.s3.amazonaws.com/images/1Kristo_Taavet_DSC6117copy.jpg"
                    alt="Like a lot of good stories, this one starts with two friends."
                    className="img-responsive img-max-height"
                    loading="lazy"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=a-OcXhIbaDE"
                    data-role="video"
                    className="btn-play"
                  >
                    <svg
                      id="Layer_1"
                      className="normal"
                      height="48px"
                      width="48px"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 71.6 71.6"
                    >
                      <title>play-2</title>
                      <circle
                        id="oval"
                        cx="35.8"
                        cy="35.8"
                        r="35.3"
                        style={{ fill: "#00b9ff", stroke: "#00b9ff" }}
                      />
                      <path
                        id="play"
                        d="M48.2,35.6a1,1,0,0,1,.5,1.4,3.17,3.17,0,0,1-.5.6L29.8,50.1c-0.8.6-1.5,0.2-1.5-.8V23.8c0-1,.7-1.3,1.5-0.8L48.2,35.6"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: "2px",
                        }}
                      />
                    </svg>
                    <svg
                      id="Layer_1"
                      className="hover"
                      height="48px"
                      width="48px"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 71.6 71.6"
                    >
                      <title>play-2-hover</title>
                      <circle
                        id="oval"
                        cx="35.8"
                        cy="35.8"
                        r="35.3"
                        style={{ fill: "#00a4df", stroke: "#00a4df" }}
                      />
                      <path
                        id="play"
                        d="M48.2,35.6a1,1,0,0,1,.55,1.3l0,0.1a3.17,3.17,0,0,1-.5.6L29.8,50.1c-0.8.6-1.5,0.2-1.5-.8V23.8c0-1,.7-1.3,1.5-0.8L48.2,35.6"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: "2px",
                        }}
                      />
                    </svg>
                  </a>
                </div>
                <h5 className="m-b-2">How we were founded.</h5>
                <h2 className="m-b-2">
                  Like a lot of good stories, this one starts with two friends.
                </h2>
                <div>
                  <p>
                    They’re both from Estonia. Taavet was the first employee at
                    Skype, so he got paid in euros. But he lived in London, and
                    needed pounds to pay the bills. Kristo worked for Deloitte
                    and lived in London. He got paid in pounds, but had a
                    mortgage back in Estonia. He needed to pay that in euros.
                    <br />
                  </p>
                  <p>
                    Every month they moved their money the old way – which
                    wasted their time and money. So they invented a beautifully
                    simple workaround that became a billion-dollar business.
                  </p>
                  <p>
                    Ready to send?{" "}
                    <a href="https://swissTransfer.com/register">Click here.</a>
                  </p>
                </div>
              </div>
              <div
                className="hidden-xs text-xs-center
                        hidden-sm
                        col-md-offset-1 col-md-6
                        text-xs-center"
              >
                <div className="media-container">
                  <img
                    src="https://lienzo.s3.amazonaws.com/images/1Kristo_Taavet_DSC6117copy.jpg"
                    alt="Like a lot of good stories, this one starts with two friends."
                    className="img-responsive img-max-height center-block"
                    loading="lazy"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=a-OcXhIbaDE"
                    data-role="video"
                    className="btn-play"
                  >
                    <svg
                      id="Layer_1"
                      className="normal"
                      height="48px"
                      width="48px"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 71.6 71.6"
                    >
                      <title>play-2</title>
                      <circle
                        id="oval"
                        cx="35.8"
                        cy="35.8"
                        r="35.3"
                        style={{ fill: "#00b9ff", stroke: "#00b9ff" }}
                      />
                      <path
                        id="play"
                        d="M48.2,35.6a1,1,0,0,1,.5,1.4,3.17,3.17,0,0,1-.5.6L29.8,50.1c-0.8.6-1.5,0.2-1.5-.8V23.8c0-1,.7-1.3,1.5-0.8L48.2,35.6"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: "2px",
                        }}
                      />
                    </svg>
                    <svg
                      id="Layer_1"
                      className="hover"
                      height="48px"
                      width="48px"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 71.6 71.6"
                    >
                      <title>play-2-hover</title>
                      <circle
                        id="oval"
                        cx="35.8"
                        cy="35.8"
                        r="35.3"
                        style={{ fill: "#00a4df", stroke: "#00a4df" }}
                      />
                      <path
                        id="play"
                        d="M48.2,35.6a1,1,0,0,1,.55,1.3l0,0.1a3.17,3.17,0,0,1-.5.6L29.8,50.1c-0.8.6-1.5,0.2-1.5-.8V23.8c0-1,.7-1.3,1.5-0.8L48.2,35.6"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: "2px",
                        }}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={2} className="section bg-primary">
          <div className="container">
            <div className="row vertical-align-center">
              <div
                className="hidden-xs
                        hidden-sm
                        col-md-6
                        text-xs-center"
              >
                <div className="media-container">
                  <img
                    src="https://lienzo.s3.amazonaws.com/images/5628e56387d72-US%20how%20it%20works%20payment%20methods.png"
                    alt="They found a better way."
                    className="img-responsive img-max-height center-block"
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-md-5 text-md-left col-md-offset-1"
              >
                <div className="media-container m-b-4 center-block hidden-md hidden-lg hidden-xl">
                  <img
                    src="https://lienzo.s3.amazonaws.com/images/5628e56387d72-US%20how%20it%20works%20payment%20methods.png"
                    alt="They found a better way."
                    className="img-responsive img-max-height"
                    loading="lazy"
                  />
                </div>
                <h5 className="m-b-2">
                  A smart new way to send money internationally.
                </h5>
                <h2 className="m-b-2">They found a better way.</h2>
                <div>
                  <p>
                    Each month, they looked up the{" "}
                    <a href="https://swissTransfer.com/us/mid-market-rate">
                      actual exchange rate on Reuters
                    </a>
                    . Taavet put his euros into Kristo’s Estonian bank account,
                    and Kristo topped up Taavet’s UK bank account using his
                    pounds. Both got the currency they needed almost instantly,
                    and neither paid an extra cent on bad exchange rates or
                    unreasonable charges.
                  </p>
                  <p>
                    There was no waiting, no stress, and no extra costs. ‘There
                    must be others just like us…’ they thought. The rest is
                    swissTransfer.
                  </p>
                  <p>
                    Do you need to send money?{" "}
                    <a href="https://swissTransfer.com/us">Click here</a> to join
                    swissTransfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={3} className="section">
          <div className="container">
            <div className="row vertical-align-center">
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-md-5 text-md-left col-md-offset-0"
              >
                <div className="media-container m-b-4 center-block hidden-md hidden-lg hidden-xl">
                  <img
                    src="https://lienzo.s3.amazonaws.com/images/58091de078a22-brazil_app.gif"
                    alt="swissTransfer today."
                    className="img-responsive img-max-height"
                    loading="lazy"
                  />
                </div>
                <h2 className="m-b-2">swissTransfer today.</h2>
                <div>
                  <p>
                    In the past 9 years, the swissTransfer movement has spread
                    far and wide. Over 9 million happy customers now trust us to
                    move more than £4.5 billion every month, saving them £3
                    million in bank fees every day. And Richard Branson, and
                    PayPal co-founder Max Levchin, among others, have invested
                    in our vision.
                  </p>
                  <p>We’ve opened 14 offices, with over 2,200 employees.</p>
                  <p>
                    And we've added the{" "}
                    <a href="https://swissTransfer.com/gb/borderless/">
                      multi-currency account
                    </a>
                    , which lets you hold over 50 currencies at once and convert
                    them whenever you like, and the{" "}
                    <a href="https://swissTransfer.com/gb/borderless/card">
                      swissTransfer debit Mastercard
                    </a>
                    .
                  </p>
                  <p>Apart from all that, not too much has changed.</p>
                  <p>
                    <a href="https://swissTransfer.com/register">Click here</a>{" "}
                    to start sending money today, or read{" "}
                    <a href="https://swissTransfer.com/gb/about/swissTransfer-reviews">
                      reviews of swissTransfer
                    </a>{" "}
                    before you send.
                  </p>
                </div>
              </div>
              <div
                className="hidden-xs text-xs-center
                        hidden-sm
                        col-md-offset-1 col-md-6
                        text-xs-center"
              >
                <div className="media-container">
                  <img
                    src="https://lienzo.s3.amazonaws.com/images/58091de078a22-brazil_app.gif"
                    alt="swissTransfer today."
                    className="img-responsive img-max-height center-block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={4} className="section how-it-works bg-default">
          <div className="container text-xs-center">
            <h2 className="m-b-2">
              Three things we believe about sending money.
            </h2>
            <div className="row">
              <div className="step">
                <div className="col-md-12 col-lg-12 m-t-3">
                  <div className="index">1</div>
                  <h3 className="m-b-2">It should be low-cost and fair.</h3>
                  <div>
                    <p>
                      There's only one fair exchange rate, and that's the one
                      you get on swissTransfer. And the fee for using
                      swissTransfer is always upfront. Why? Because finance
                      hasn’t been fair for a very long time, and it’s time for a
                      better, cheaper way of moving your money.
                    </p>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="col-md-12 col-lg-12 m-t-3">
                  <div className="index">2</div>
                  <h3 className="m-b-2">It should be easy.</h3>
                  <div>
                    <p>
                      Sending money should be stress-free – no matter how far
                      it’s traveling. So we’ve built a whole team that’s
                      dedicated to keeping your money safe and the process
                      watertight. It’s bank-level security, minus the banks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="col-md-12 col-lg-12 m-t-3">
                  <div className="index">3</div>
                  <h3 className="m-b-2">It should be fast.</h3>
                  <div>
                    <p>
                      We believe that sending money should be as fast as sending
                      an email. So we’ve made swissTransfer as simple as logging
                      on, signing up, and sending. Smart technology means money
                      never crosses borders. And most transfers happen the same
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta row text-xs-center vertical-align-center">
              <a
                className="btn btn-primary"
                href="https://swissTransfer.com/register"
              >
                Send money
              </a>
            </div>
          </div>
        </section>
        <section id={5} className="section bg-map">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-md-offset-0 col-md-5"
              >
                <div>
                  <div id="calculator-widget" />
                </div>
              </div>
              <div
                className="col-xs-12 text-xs-center
                            col-sm-offset-1 col-sm-10
                            col-md-offset-1 col-md-6 text-md-left"
              >
                <h2 className="m-b-2">Not ready yet?</h2>
                <p>
                  Why not sign up for exchange rate alerts? Get a daily update
                  on the exchange rate, or set a target exchange rate so that
                  you can transfer at the right time for you.
                </p>
                <a
                  target="_blank"
                  className="btn btn-default"
                  href="https://swissTransfer.com/tools/exchange-rate-alerts/#/subscribe"
                >
                  Sign up for rate alerts
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id={6} className="section">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-lg-offset-0 col-lg-4"
              >
                <blockquote>
                  <img
                    className="m-b-4"
                    alt="Another key to their success - swissTransfer has shifted more than £3bn of customers' money since 2011 - is the simplicity of design"
                    src="https://daurzqvz85pz.cloudfront.net/55cdbfc055ec7-bbc.png"
                    style={{ maxHeight: "32px" }}
                    loading="lazy"
                  />
                  <p>
                    Another key to their success - swissTransfer has shifted more
                    than £3bn of customers' money since 2011 - is the simplicity
                    of design
                  </p>
                  <a href="http://www.bbc.com/news/business-31639262">
                    Read article
                  </a>
                </blockquote>
              </div>
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-lg-offset-0 col-lg-4"
              >
                <blockquote>
                  <img
                    className="m-b-4"
                    alt="swissTransfer takes a machete to the hefty fees that banks levy to send money across borders."
                    src="https://daurzqvz85pz.cloudfront.net/55cdbfc083176-economis.png"
                    style={{ maxHeight: "32px" }}
                    loading="lazy"
                  />
                  <p>
                    swissTransfer takes a machete to the hefty fees that banks
                    levy to send money across borders.
                  </p>
                  <a href="http://www.economist.com/news/leaders/21650546-wave-startups-changing-financefor-better-fintech-revolution">
                    Read article
                  </a>
                </blockquote>
              </div>
              <div
                className="col-xs-12
                        col-sm-offset-1 col-sm-10
                        col-lg-offset-0 col-lg-4"
              >
                <blockquote>
                  <img
                    className="m-b-4"
                    alt="And voilà , 90 minutes later 250 euros showed up in a European account. There was no spread, just a $3 fee."
                    src="https://lienzo.s3.amazonaws.com/images/151b4ab4ad43685d87b036549eb2f924-white-logo-media.png"
                    style={{ maxHeight: "32px" }}
                    loading="lazy"
                  />
                  <p>
                    And voilà , 90 minutes later 250 euros showed up in a
                    European account. There was no spread, just a $3 fee.
                  </p>
                  <a href="http://www.forbes.com/sites/samanthasharf/2016/05/26/skype-for-cash-how-swissTransfer-is-upending-the-way-consumers-move-3-trillion-around-the-globe/#58d88eb24f3a">
                    Read article
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer className="footer p-y-section-5 footer-inverse">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-xs-center text-md-left">
              <a
                href="https://swissTransfer.com"
                className="logo logo-3 center-block m-b-4 hidden-md hidden-lg hidden-xl logo-inverse"
              >
                swissTransfer
              </a>
              <h5 className="footer-title m-b-2">Company and team</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/about/our-story"
                  >
                    Company and team
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/blog/"
                  >
                    News and blog
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/press"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/jobs/"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/partnerwise"
                  >
                    Affiliates and partnerships
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-xs-center text-md-left">
              <h5 className="footer-title m-b-2">Help and support</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/help/"
                  >
                    Help centre
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/mid-market-rate"
                  >
                    Mid-market rate
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-xs-center text-md-left">
              <h5 className="footer-title m-b-2">Learn more</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/send-money/"
                  >
                    Send money abroad
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/swift-codes/"
                  >
                    Swift/BIC codes
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/currency-converter/"
                  >
                    Currency converter
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/iban/"
                  >
                    IBAN codes
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/tools/exchange-rate-alerts"
                  >
                    Rate alerts
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://swissTransfer.com/gb/compare/"
                  >
                    Compare exchange rates
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-xs-center text-md-left">
              <h5 className="footer-title m-b-2">Follow us</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://facebook.com/swissTransfer"
                    className="link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-lg"
                    >
                      <title>Facebook</title>
                      <path d="M30.234 0H1.766C.791 0 0 .79 0 1.766v28.468C0 31.209.79 32 1.766 32h15.328V19.625h-4.157v-4.844h4.157V11.22c0-4.133 2.524-6.384 6.211-6.384 1.766 0 3.284.132 3.726.188v4.32h-2.55c-2 0-2.387.953-2.387 2.352v3.086h4.796l-.625 4.844h-4.171V32h8.14c.975 0 1.766-.79 1.766-1.766V1.766C32 .791 31.21 0 30.234 0z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/swissTransfer"
                    className="link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-lg"
                    >
                      <title>Twitter</title>
                      <path d="M28 32H4c-2.208 0-4-1.792-4-4V4c0-2.208 1.792-4 4-4h24c2.208 0 4 1.792 4 4v24c0 2.208-1.792 4-4 4zm-15.712-7.872c7.544 0 11.672-6.256 11.672-11.672 0-.176 0-.352-.008-.528A8.357 8.357 0 0 0 26 9.8a8.314 8.314 0 0 1-2.36.648 4.127 4.127 0 0 0 1.808-2.272 8.16 8.16 0 0 1-2.608.992 4.095 4.095 0 0 0-2.992-1.296 4.107 4.107 0 0 0-4.104 4.104c0 .32.04.632.104.936a11.649 11.649 0 0 1-8.456-4.288 4.113 4.113 0 0 0 1.272 5.48 4.15 4.15 0 0 1-1.856-.512v.056a4.11 4.11 0 0 0 3.288 4.024 4 4 0 0 1-1.08.144c-.264 0-.52-.024-.768-.072a4.102 4.102 0 0 0 3.832 2.848 8.228 8.228 0 0 1-5.096 1.76c-.328 0-.656-.016-.976-.056a11.669 11.669 0 0 0 6.28 1.832z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/swissTransfer"
                    className="link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-lg"
                    >
                      <title>Instagram</title>
                      <path d="M15.995.01C11.651.01 11.106.03 9.4.106 7.698.184 6.535.454 5.518.85a7.84 7.84 0 0 0-2.833 1.845A7.84 7.84 0 0 0 .84 5.528C.444 6.545.174 7.708.096 9.41.018 11.116 0 11.661 0 16.005c0 4.344.018 4.889.096 6.595.078 1.702.348 2.865.744 3.882a7.84 7.84 0 0 0 1.845 2.833 7.841 7.841 0 0 0 2.833 1.845c1.017.396 2.18.666 3.882.744 1.706.078 2.251.096 6.595.096 4.344 0 4.889-.018 6.595-.096 1.702-.078 2.865-.348 3.882-.744a7.841 7.841 0 0 0 2.833-1.845 7.841 7.841 0 0 0 1.845-2.833c.396-1.017.666-2.18.744-3.882.077-1.706.096-2.251.096-6.595 0-4.344-.019-4.889-.096-6.595-.078-1.702-.348-2.865-.744-3.882a7.841 7.841 0 0 0-1.845-2.833A7.84 7.84 0 0 0 26.472.85C25.455.454 24.292.184 22.59.106 20.884.03 20.339.01 15.995.01zm0 2.882c4.27 0 4.777.016 6.463.093 1.56.071 2.407.332 2.97.551.747.29 1.28.637 1.84 1.197s.906 1.092 1.196 1.839c.219.563.48 1.41.55 2.97.078 1.686.094 2.192.094 6.463 0 4.27-.016 4.777-.093 6.463-.071 1.56-.332 2.407-.551 2.97a4.955 4.955 0 0 1-1.197 1.84c-.56.56-1.092.906-1.839 1.196-.563.22-1.41.48-2.97.55-1.686.078-2.192.094-6.463.094s-4.777-.016-6.463-.093c-1.56-.071-2.407-.332-2.97-.551a4.955 4.955 0 0 1-1.84-1.196 4.956 4.956 0 0 1-1.196-1.84c-.22-.563-.48-1.41-.55-2.97-.078-1.686-.094-2.192-.094-6.463 0-4.27.016-4.777.093-6.463.071-1.56.332-2.407.551-2.97.29-.747.637-1.28 1.196-1.84a4.955 4.955 0 0 1 1.84-1.196c.563-.219 1.41-.48 2.97-.55 1.686-.078 2.192-.094 6.463-.094z"></path>
                      <path d="M16 21.316a5.316 5.316 0 1 1 0-10.632 5.316 5.316 0 0 1 0 10.632zM16 7.81a8.189 8.189 0 1 0 0 16.378A8.189 8.189 0 0 0 16 7.81zM26.457 7.433a1.89 1.89 0 1 1-3.78 0 1.89 1.89 0 0 1 3.78 0"></path>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/swissTransfer"
                    className="link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>YouTube</title>
                      <path d="M22.0617 6.93984C21.9422 6.49462 21.7078 6.0886 21.382 5.76243C21.0563 5.43625 20.6505 5.20136 20.2055 5.08125C18.5672 4.64063 12 4.64062 12 4.64062C12 4.64062 5.43281 4.64062 3.79453 5.07891C3.34927 5.19862 2.94334 5.43339 2.61751 5.75962C2.29169 6.08586 2.05744 6.49208 1.93828 6.9375C1.5 8.57812 1.5 12 1.5 12C1.5 12 1.5 15.4219 1.93828 17.0602C2.17969 17.9648 2.89219 18.6773 3.79453 18.9188C5.43281 19.3594 12 19.3594 12 19.3594C12 19.3594 18.5672 19.3594 20.2055 18.9188C21.1102 18.6773 21.8203 17.9648 22.0617 17.0602C22.5 15.4219 22.5 12 22.5 12C22.5 12 22.5 8.57813 22.0617 6.93984ZM9.91406 15.1406V8.85938L15.3516 11.9766L9.91406 15.1406Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="m-t-0" />
          <div className="row m-b-5">
            <div className="col-md-3">
              <a
                href="https://swissTransfer.com"
                className="logo logo-3 hidden-xs hidden-sm logo-inverse"
              >
                swissTransfer
              </a>
            </div>
            <div className="col-md-3 text-xs-center text-md-left footer-title">
              <a
                className="footer-link"
                href="https://swissTransfer.com/terms-of-use"
              >
                Legal
              </a>
            </div>
            <div className="col-md-3 text-xs-center text-md-left footer-title">
              <a
                className="footer-link"
                href="https://swissTransfer.com/privacy-policy"
              >
                Privacy policy
              </a>
            </div>
            <div className="col-md-3 text-xs-center text-md-left footer-title">
              <a
                className="footer-link"
                href="https://swissTransfer.com/local-sites/"
              >
                Country site map
              </a>
            </div>
          </div>
          <div className="row text-xs-center m-t-5">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <p className="tiny">
                © swissTransfer Ltd <span>2020</span>
              </p>
              <p className="tiny">
                swissTransfer is authorised by the Financial Conduct Authority
                under the Electronic Money Regulations 2011, Firm Reference{" "}
                <a
                  rel="noopener"
                  className="footer-link"
                  href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000001EjC6SAAV"
                  target="_blank"
                >
                  900507
                </a>
                , for the issuing of electronic money.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs
