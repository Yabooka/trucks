export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://og.thcl.dev/images/logo.jpg',
}) {
  const ogLogo = encodeURIComponent(logo)
  const ogSiteName = encodeURIComponent(siteName.trim())
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined
  const ogDesc = encodeURIComponent(description.trim())

  return `https://og.thcl.dev/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`
}
