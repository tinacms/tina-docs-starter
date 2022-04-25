export const sideMenuItems = (sideNavFiles) => {
  const files = sideNavFiles?.docsConnection?.edges;

  // If no sideNavFiles, return an empty array
  if (!files?.length) return [];

  // Create a section-to-children mapping
  const groupsMapping = {};
  for (const file of files) {
    const { title } = file.node;
    const {
      filename,
      collection: { name: collectionName },
    } = file.node._sys;

    // If no section, use the default one ("Docs")
    let section = file.node.section;
    if (!section) section = "Docs";

    if (!groupsMapping[section]) groupsMapping[section] = [];
    groupsMapping[section].push({
      title: title || "",
      slug: `/${collectionName}/${filename}`,
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
