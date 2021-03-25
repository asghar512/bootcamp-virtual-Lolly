exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/lollies/)) {
    page.matchPath = "/lollies/*"
    createPage(page)
  }
}
