export const sideMenuItems = (sideNavFiles) => {
  const menuGroups = [];
  const group = {};
  group['section'] = "Docs"
  group['children'] = []
  menuGroups.push(group)
  sideNavFiles.getDocsList.edges.map((file) => {
    const title = file.node.data.title;
    const slug = file.node.data.slug;
      
      group['children'].push({
        slug : slug || "", 
        title: title || "", 
      })
  });
  return menuGroups
}