export function GTMIframe() {
    return(
        <>
    <iframe
      title="Google Tag Manager"
      src="https://www.googletagmanager.com/ns.html?id=GTM-W6LTF9K8"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-W6LTF9K8"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  </>
    )
}