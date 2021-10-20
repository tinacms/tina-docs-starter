export const sideMenuItems = (sideNavFiles) => {
  const menuGroups = [];
  sideNavFiles.getDocsList.edges.map((file) => {
    const test = file.node.sys.path;
    const title = file.node.data.title;
    const slug = file.node.data.slug;
    const split = test.split('/');
    if(split.length >= 3){
      const group = {}
      menuGroups.push(group)
      group['children'] = []
      group['section'] = split[0]
      group['subsection'] = split[1]
      group['children'].push({
        slug : slug, 
        title: title, 
      })
    }
  });
  return menuGroups
}