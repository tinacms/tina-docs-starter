export const sideMenuItems = (sideNavFiles) => {
  const files = sideNavFiles?.getDocsList?.edges;

  // If no sideNavFiles, return an empty array
  if (!files?.length) return [];

  // Create a section-to-children mapping
  const groupsMapping = {};
  for (const file of files) {
    const {title, slug} = file.node.data;
    let section = file.node.data.section;

    // If no section, use the default one ("Docs")
    if (!section) section = "Docs";

    if (!groupsMapping[section]) groupsMapping[section] = [];
    groupsMapping[section].push({
      slug: slug || "",
      title: title || "",
    });
  }

  // Build the actual menu groups from the previously created mapping
  const menuGroups = [];
  for (const [section, children] of Object.entries(groupsMapping)) {
    menuGroups.push({
      section,
      children,
    });
  }

  return menuGroups;
};
