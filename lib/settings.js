export function loadSettings() {
  try {
    return {
      business: require('../content/settings/business.json'),
      general: require('../content/settings/general.json'),
      theme: require('../content/settings/theme.json'),
      sections: require('../content/settings/sections.json')
    };
  } catch (error) {
    console.error('Error loading settings:', error);
    return null;
  }
}

