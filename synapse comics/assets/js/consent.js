(function(){
  const key = 'synapse.cookieConsent';
  const banner = document.getElementById('cookie-banner');
  const saved = localStorage.getItem(key);

  function loadAnalytics(){
    // GA4 (replace G-XXXXXXX)
    (function(){
      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
      document.head.appendChild(s1);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
    })();

    // Meta Pixel (replace 1234567890)
    (function(f,b,e,v,n,t,s){
      if(f.fbq) return; n=f.fbq=function(){ n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments) };
      if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
      n.queue=[]; t=b.createElement(e); t.async=!0; t.src=v;
      s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)
    })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1234567890'); // <-- your Pixel ID
    fbq('track', 'PageView');
  }

  if (saved === 'accept') {
    loadAnalytics();
  } else if (saved === 'decline') {
    // do nothing
  } else {
    banner.style.display = 'block';
  }

  const accept = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');

  accept && accept.addEventListener('click', () => {
    localStorage.setItem(key, 'accept');
    banner.style.display = 'none';
    loadAnalytics();
  });
  decline && decline.addEventListener('click', () => {
    localStorage.setItem(key, 'decline');
    banner.style.display = 'none';
  });
})();
