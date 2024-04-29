const reports = [
  {
    filename: 'COMMB-Special-Report-Travel-Behaviours-Correlated-to-Increased-Cases-and-Lockdown-Restrictions',
    title: 'Special Report: Canadian Travel Behaviour',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/31SC4h9k4JoefnsTKgFwvo/857699242a2491acf8a79869c0bf9f07/COMMB-Special-Report-Travel-Behaviours-Correlated-to-Increased-Cases-and-Lockdown-Restrictions.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-Issue-1-2',
    title: 'Insights Report Issue #1',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/17vuRx0HDpHraj6DxCx0yX/5a834944c12c04e4c1b978459affc337/COMMB-INSIGHTS-REPORT-Issue-1-2.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-Issue-2',
    title: 'Insights Report Issue #2',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5lQl7ee1Z5VZOXqhxdbbBX/101787d1c331f415da2b6d2be27b029f/COMMB-INSIGHTS-REPORT-Issue-2.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-JULY-1',
    title: 'Insights Report Issue #3',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4S5SFj5DlmSysXprMYVFq8/dad5247507c4f5e3326247b1708216a2/COMMB-INSIGHTS-REPORT-JULY-1.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-Q3',
    title: 'Insights Report Issue #4',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4FVGbdxoO3bitRAwJIlT13/11f8e3bd3d87861ad573e1eaa12a4af6/COMMB-INSIGHTS-REPORT-Q3.pdf',
  },
  {
    filename: 'INSIGHTS-REPORT5-15.12-en',
    title: 'Insights Report Issue #5',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/339vj88E3SycnRtAZPHDOV/758cc92400aedabfb39ee3ff50ad962c/INSIGHTS-REPORT5-15.12-en.pdf',
  },
  {
    filename: 'INSIGHTS REPORT 6 - EN final',
    title: 'Insights Report Issue #6',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/67wmoLb6ghJq3Sbx6KWeLe/800912392d180c5ee378c0cf9a9893b8/INSIGHTS_REPORT_6_-_EN_final.pdf',
  },
  {
    filename: 'INSIGHTS REPORT - Q3 October 2022 - EN',
    title: 'Insights Report Issue #7',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2I0zRbjUD3tstJzVYWAxI2/185ec682f945d8fb33759df79c8ad3ec/INSIGHTS_REPORT_-_Q3_October_2022_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS REPORT - Q1 January 2023 - EN',
    title: 'Insights Report Issue #8',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5IoKeyZhhezOYtKI99i9pk/ccbf34cbd0bdfa2d5ba58af6a88326bd/INSIGHTS_REPORT_-_Q1_January_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q2_May_2023_-_EN',
    title: 'Insights Report Issue #9',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/4SzM7ZPVnqAirf6L6wVoZv/00b9b0511587196ee4e9583bda78eb96/INSIGHTS_REPORT_-_Q2_May_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q3_2023_-_EN',
    title: 'Insights Report Issue #10',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7rBGcuuYKsVosBgp4b2zsc/11e25555e6871ef6bd35201e42316004/INSIGHTS_REPORT_-_Q3_2023_-_EN.pdf',
  },
  {
    filename: 'COMMB_Insights_Report_-_Q4_2023__EN_',
    title: 'Insights Report Issue #11',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/oBa3tQ5jrTZVqQ3MH3q0e/e4a9bbb566c1425bf22f9cfc45cfb003/COMMB_Insights_Report_-_Q4_2023__EN_.pdf',
  },
  {
    filename: 'qa-october-en (2)',
    title: 'Insight Report Q3 October 2022',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2I0zRbjUD3tstJzVYWAxI2/185ec682f945d8fb33759df79c8ad3ec/INSIGHTS_REPORT_-_Q3_October_2022_-_EN.pdf',
  },
  {
    filename: 'Dentsu QA EN compressed-1',
    title: 'Dentsu',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/3FUnvcd96Rg90CevHanP6r/f3a00c5ebed0ef19c2ec4ec0e8b73c00/Dentsu_QA_EN_compressed-1.pdf',
  },
  {
    filename: 'QARogers_final_EN',
    title: 'Rogers. Sports & Media',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/9blFhRcRt4bessWQZgXlJ/a8801827be096f7f8d0216338c49799f/QARogers_final_EN.pdf',
  },
  {
    filename: 'Kinetic_QA_EN_Final',
    title: 'Kinetic',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6jOqAqwRWbq0FoanyCXO52/f9a1fc076cb6e0ae9c433d977f124edf/Kinetic_QA_EN_Final.pdf',
  },
  {
    filename: 'April-QA-EN',
    title: 'Astral, Outfront, Pattison',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4hMCCLblNjeP4hA9TR6nVT/3bd93785991e6d3b49d81a0d8e3547db/April-QA-EN.pdf',
  },
  {
    filename: 'EN-Programmatic-DOOH-',
    title: 'Programmatic DOOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/1OVMd6EHzT9m6uqTBd3F5a/4d09856d8405a77cbfeef7ac961a89dd/EN-Programmatic-DOOH-.pdf',
  },
  {
    filename: 'Local-Advertisers-QA-en',
    title: 'Local Advertisers',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5io1mhiIYbSoZjD7vsPd7t/12b42671c87dc96fe874595b2d6223a2/Local-Advertisers-QA-en.pdf',
  },
  {
    filename: 'Industry-perspective-QA',
    title: 'Industry Perspective. Growth and Looking Towards 2022',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/73MOfTyH64CskTetJzRKHV/60ad02448b7896b1bbae0c832baaf8e8/Industry-perspective-QA.pdf',
  },
  {
    filename: 'qa-october-en-2',
    title: 'The Power of Static OOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/51JjuozVWxhg3BipAp9kPu/da3810f29270092e411c449403cd6c85/qa-october-en-2.pdf',
  },
  {
    filename: 'January-QA-final-EN',
    title: 'Amanda Dorenberg',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4FMEC3iVkKM8JZrcAfh45T/9cbfc4ccb8bce4cd2e018c85ddc4ec32/January-QA-final-EN.pdf',
  },
  {
    filename: 'February-QA-EN-final',
    title: 'Creative\'s Perspective of OOH',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/2ZphBuRr1pyIO4bFevtfBl/f61d4fbcca20ec70f09e7145bb346154/February-QA-EN-final.pdf',
  },
  {
    filename: 'Place-based_Q_A_-_April_2022_-_EN',
    title: 'Place-Based OOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2m50uZHqibPlGhvmCyImXB/4bb6975818346e1957e6407105079b97/Place-based_Q_A_-_April_2022_-_EN.pdf',
  },
  {
    filename: 'Connectivity_Q_A_-_EN',
    title: 'Connectivity',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4Bz8M85KWFu2OHrwK2iiTE/1d562fb226d7f738395bbe7c6d91367c/Connectivity_Q_A_-_EN.pdf',
  },
  {
    filename: 'September_Q_A_-_Holiday_edition_-_EN',
    title: 'OOH for the Holidays',
    url: 'https://images.ctfassets.net/1l6si2vnlb2k/1dZo44WHIw3LE20Wj21TBf/3d4fc921971d6bc6c50d2df7b949cd7f/QA_-_12_-_holidays.png?w=1200&h=1200&q=50&fm=webp',
  },
  {
    filename: 'Travel_Q_A_-_November_2022_-_EN',
    title: 'OOH for Travel',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/ISlimJcM38GfTdpuwRL15/5bd9a690a7cb097aef4862966b24f834/Travel_Q_A_-_November_2022_-_EN.pdf',
  },
  {
    filename: 'February_Q_A_-_On_the_Move_-_EN',
    title: 'Moving Media Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4GupDhY1461eoFZh3hqi3Z/6fb1d7d4160622dedcf28f18bb25374e/February_Q_A_-_On_the_Move_-_EN.pdf',
  },
  {
    filename: 'Dynamic_Creative_Optimization_Q_A_-_EN',
    title: 'Dynamic Creative Optimization Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6RAi6SdNnJnTDWReoHQhCk/f455e78c5eba23fd3e626898ce90bb9b/Dynamic_Creative_Optimization_Q_A_-_EN.pdf',
  },
  {
    filename: 'Q_A_-_OOH_Specialists_-_EN',
    title: 'OOH Specialists Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2L4BPLtvQtwvXhPvxbXdJn/3ba1d276be25a31f8d24af20ec8e554f/Q_A_-_OOH_Specialists_-_EN.pdf',
  },
  {
    filename: 'qa-mar24-en',
    title: 'Agency Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/3fcOmv8GWtA41w0zxpproA/cabb67afcba9fea53e95ec936ded1095/qa-mar24-en.pdf',
  }
];
export default reports;
