import React from 'react';

export default function Footer() {
  return (
<footer className="page-footer font-small cyan darken-3">

  <div className="container">

    <div className="row">

      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center">

          <a className="fb-ic" href='github.com/azizmobarak'>
          <i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
          </a>
          <a className="tw-ic" href='twitter.com/mobarakaziz95'>
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic" href="https://www.linkedin.com/in/aziz-mobarak-652758160/">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="ins-ic" href="instagram.com/azdeviz">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        </div>
      </div>

    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/author"> JavascriptDeveloper - By Aziz Mobarak</a>
  </div>

</footer>
  );
}
