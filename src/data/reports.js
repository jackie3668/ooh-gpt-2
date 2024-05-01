const reports = [
  {
    filename: 'COMMB-Special-Report-Travel-Behaviours-Correlated-to-Increased-Cases-and-Lockdown-Restrictions.pdf',
    title: 'Special Report: Canadian Travel Behaviour',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/31SC4h9k4JoefnsTKgFwvo/857699242a2491acf8a79869c0bf9f07/COMMB-Special-Report-Travel-Behaviours-Correlated-to-Increased-Cases-and-Lockdown-Restrictions.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-Issue-1-2.pdf',
    title: 'Insights Report Issue #1',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/17vuRx0HDpHraj6DxCx0yX/5a834944c12c04e4c1b978459affc337/COMMB-INSIGHTS-REPORT-Issue-1-2.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-Issue-2.pdf',
    title: 'Insights Report Issue #2',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5lQl7ee1Z5VZOXqhxdbbBX/101787d1c331f415da2b6d2be27b029f/COMMB-INSIGHTS-REPORT-Issue-2.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-JULY-1.pdf',
    title: 'Insights Report Issue #3',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4S5SFj5DlmSysXprMYVFq8/dad5247507c4f5e3326247b1708216a2/COMMB-INSIGHTS-REPORT-JULY-1.pdf',
  },
  {
    filename: 'COMMB-INSIGHTS-REPORT-Q3.pdf',
    title: 'Insights Report Issue #4',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4FVGbdxoO3bitRAwJIlT13/11f8e3bd3d87861ad573e1eaa12a4af6/COMMB-INSIGHTS-REPORT-Q3.pdf',
  },
  {
    filename: 'INSIGHTS-REPORT5-15.12-en.pdf',
    title: 'Insights Report Issue #5',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/339vj88E3SycnRtAZPHDOV/758cc92400aedabfb39ee3ff50ad962c/INSIGHTS-REPORT5-15.12-en.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_6_-_EN_final.pdf',
    title: 'Insights Report Issue #6',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/67wmoLb6ghJq3Sbx6KWeLe/800912392d180c5ee378c0cf9a9893b8/INSIGHTS_REPORT_6_-_EN_final.pdf',
  },
  {
    filename: 'INSIGHTS REPORT 6 - EN final.pdf',
    title: 'Insights Report Issue #6',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/67wmoLb6ghJq3Sbx6KWeLe/800912392d180c5ee378c0cf9a9893b8/INSIGHTS_REPORT_6_-_EN_final.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q3_October_2022_-_EN.pdf',
    title: 'Insights Report Issue #7',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2I0zRbjUD3tstJzVYWAxI2/185ec682f945d8fb33759df79c8ad3ec/INSIGHTS_REPORT_-_Q3_October_2022_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS REPORT - Q3 October 2022 - EN.pdf',
    title: 'Insights Report Issue #7',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2I0zRbjUD3tstJzVYWAxI2/185ec682f945d8fb33759df79c8ad3ec/INSIGHTS_REPORT_-_Q3_October_2022_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q1_January_2023_-_EN.pdf',
    title: 'Insights Report Issue #8',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5IoKeyZhhezOYtKI99i9pk/ccbf34cbd0bdfa2d5ba58af6a88326bd/INSIGHTS_REPORT_-_Q1_January_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS REPORT - Q1 January 2023 - EN.pdf',
    title: 'Insights Report Issue #8',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5IoKeyZhhezOYtKI99i9pk/ccbf34cbd0bdfa2d5ba58af6a88326bd/INSIGHTS_REPORT_-_Q1_January_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q2_May_2023_-_EN.pdf',
    title: 'Insights Report Issue #9',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/4SzM7ZPVnqAirf6L6wVoZv/00b9b0511587196ee4e9583bda78eb96/INSIGHTS_REPORT_-_Q2_May_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS REPORT - Q2 May 2023 - EN.pdf',
    title: 'Insights Report Issue #9',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/4SzM7ZPVnqAirf6L6wVoZv/00b9b0511587196ee4e9583bda78eb96/INSIGHTS_REPORT_-_Q2_May_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q3_2023_-_EN.pdf',
    title: 'Insights Report Issue #10',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7rBGcuuYKsVosBgp4b2zsc/11e25555e6871ef6bd35201e42316004/INSIGHTS_REPORT_-_Q3_2023_-_EN.pdf',
  },
  {
    filename: 'INSIGHTS REPORT - Q3 2023 - EN.pdf',
    title: 'Insights Report Issue #10',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7rBGcuuYKsVosBgp4b2zsc/11e25555e6871ef6bd35201e42316004/INSIGHTS_REPORT_-_Q3_2023_-_EN.pdf',
  },
  {
    filename: 'COMMB_Insights_Report_-_Q4_2023__EN_.pdf',
    title: 'Insights Report Issue #11',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/oBa3tQ5jrTZVqQ3MH3q0e/e4a9bbb566c1425bf22f9cfc45cfb003/COMMB_Insights_Report_-_Q4_2023__EN_.pdf',
  },
  {
    filename: 'COMMB Insights Report - Q4 2023 EN .pdf',
    title: 'Insights Report Issue #11',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/oBa3tQ5jrTZVqQ3MH3q0e/e4a9bbb566c1425bf22f9cfc45cfb003/COMMB_Insights_Report_-_Q4_2023__EN_.pdf',
  },
  {
    filename: 'qa-october-en.pdf',
    title: 'Insight Report Q3 October 2022',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2I0zRbjUD3tstJzVYWAxI2/185ec682f945d8fb33759df79c8ad3ec/INSIGHTS_REPORT_-_Q3_October_2022_-_EN.pdf',
  },
  {
    filename: 'Dentsu_QA_EN_compressed-1.pdf',
    title: 'Dentsu',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/3FUnvcd96Rg90CevHanP6r/f3a00c5ebed0ef19c2ec4ec0e8b73c00/Dentsu_QA_EN_compressed-1.pdf',
  },
  {
    filename: 'Dentsu QA EN compressed-1.pdf',
    title: 'Dentsu',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/3FUnvcd96Rg90CevHanP6r/f3a00c5ebed0ef19c2ec4ec0e8b73c00/Dentsu_QA_EN_compressed-1.pdf',
  },
  {
    filename: 'QARogers_final_EN.pdf',
    title: 'Rogers. Sports & Media',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/9blFhRcRt4bessWQZgXlJ/a8801827be096f7f8d0216338c49799f/QARogers_final_EN.pdf',
  },
  {
    filename: 'QARogers final EN.pdf',
    title: 'Rogers. Sports & Media',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/9blFhRcRt4bessWQZgXlJ/a8801827be096f7f8d0216338c49799f/QARogers_final_EN.pdf',
  },
  {
    filename: 'Kinetic_QA_EN_Final.pdf',
    title: 'Kinetic',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6jOqAqwRWbq0FoanyCXO52/f9a1fc076cb6e0ae9c433d977f124edf/Kinetic_QA_EN_Final.pdf',
  },
  {
    filename: 'Kinetic QA EN Final.pdf',
    title: 'Kinetic',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6jOqAqwRWbq0FoanyCXO52/f9a1fc076cb6e0ae9c433d977f124edf/Kinetic_QA_EN_Final.pdf',
  },
  {
    filename: 'April-QA-EN.pdf',
    title: 'Astral, Outfront, Pattison',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4hMCCLblNjeP4hA9TR6nVT/3bd93785991e6d3b49d81a0d8e3547db/April-QA-EN.pdf',
  },
  {
    filename: 'EN-Programmatic-DOOH-.pdf',
    title: 'Programmatic DOOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/1OVMd6EHzT9m6uqTBd3F5a/4d09856d8405a77cbfeef7ac961a89dd/EN-Programmatic-DOOH-.pdf',
  },
  {
    filename: 'Local-Advertisers-QA-en.pdf',
    title: 'Local Advertisers',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5io1mhiIYbSoZjD7vsPd7t/12b42671c87dc96fe874595b2d6223a2/Local-Advertisers-QA-en.pdf',
  },
  {
    filename: 'Local Advertisers - en.pdf',
    title: 'Local Advertisers',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5io1mhiIYbSoZjD7vsPd7t/12b42671c87dc96fe874595b2d6223a2/Local-Advertisers-QA-en.pdf',
  },
  {
    filename: 'Industry-perspective-QA.pdf',
    title: 'Industry Perspective. Growth and Looking Towards 2022',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/73MOfTyH64CskTetJzRKHV/60ad02448b7896b1bbae0c832baaf8e8/Industry-perspective-QA.pdf',
  },
  {
    filename: 'qa-october-en-2.pdf',
    title: 'The Power of Static OOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/51JjuozVWxhg3BipAp9kPu/da3810f29270092e411c449403cd6c85/qa-october-en-2.pdf',
  },
  {
    filename: 'January-QA-final-EN.pdf',
    title: 'Amanda Dorenberg',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4FMEC3iVkKM8JZrcAfh45T/9cbfc4ccb8bce4cd2e018c85ddc4ec32/January-QA-final-EN.pdf',
  },
  {
    filename: 'February-QA-EN-final.pdf',
    title: 'Creative\'s Perspective of OOH',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/2ZphBuRr1pyIO4bFevtfBl/f61d4fbcca20ec70f09e7145bb346154/February-QA-EN-final.pdf',
  },
  {
    filename: 'Place-based_Q_A_-_April_2022_-_EN.pdf',
    title: 'Place-Based OOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2m50uZHqibPlGhvmCyImXB/4bb6975818346e1957e6407105079b97/Place-based_Q_A_-_April_2022_-_EN.pdf',
  },
  {
    filename: 'Place-based Q A - April 2022 - EN.pdf',
    title: 'Place-Based OOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2m50uZHqibPlGhvmCyImXB/4bb6975818346e1957e6407105079b97/Place-based_Q_A_-_April_2022_-_EN.pdf',
  },
  {
    filename: 'Connectivity_Q_A_-_EN.pdf',
    title: 'Connectivity',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4Bz8M85KWFu2OHrwK2iiTE/1d562fb226d7f738395bbe7c6d91367c/Connectivity_Q_A_-_EN.pdf',
  },
  {
    filename: 'Connectivity Q A - EN.pdf',
    title: 'Connectivity',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4Bz8M85KWFu2OHrwK2iiTE/1d562fb226d7f738395bbe7c6d91367c/Connectivity_Q_A_-_EN.pdf',
  },
  {
    filename: 'September_Q_A_-_Holiday_edition_-_EN.pdf',
    title: 'OOH for the Holidays',
    url: 'https://images.ctfassets.net/1l6si2vnlb2k/1dZo44WHIw3LE20Wj21TBf/3d4fc921971d6bc6c50d2df7b949cd7f/QA_-_12_-_holidays.png?w=1200&h=1200&q=50&fm=webp',
  },
  {
    filename: 'September Q A - Holiday edition - EN.pdf',
    title: 'OOH for the Holidays',
    url: 'https://images.ctfassets.net/1l6si2vnlb2k/1dZo44WHIw3LE20Wj21TBf/3d4fc921971d6bc6c50d2df7b949cd7f/QA_-_12_-_holidays.png?w=1200&h=1200&q=50&fm=webp',
  },
  {
    filename: 'Travel_Q_A_-_November_2022_-_EN.pdf',
    title: 'OOH for Travel',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/ISlimJcM38GfTdpuwRL15/5bd9a690a7cb097aef4862966b24f834/Travel_Q_A_-_November_2022_-_EN.pdf',
  },
  {
    filename: 'Travel Q A - November 2022 - EN.pdf',
    title: 'OOH for Travel',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/ISlimJcM38GfTdpuwRL15/5bd9a690a7cb097aef4862966b24f834/Travel_Q_A_-_November_2022_-_EN.pdf',
  },
  {
    filename: 'February_Q_A_-_On_the_Move_-_EN.pdf',
    title: 'Moving Media Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4GupDhY1461eoFZh3hqi3Z/6fb1d7d4160622dedcf28f18bb25374e/February_Q_A_-_On_the_Move_-_EN.pdf',
  },
  {
    filename: 'February Q A - On the Move - EN.pdf',
    title: 'Moving Media Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4GupDhY1461eoFZh3hqi3Z/6fb1d7d4160622dedcf28f18bb25374e/February_Q_A_-_On_the_Move_-_EN.pdf',
  },
  {
    filename: 'Dynamic_Creative_Optimization_Q_A_-_EN.pdf',
    title: 'Dynamic Creative Optimization Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6RAi6SdNnJnTDWReoHQhCk/f455e78c5eba23fd3e626898ce90bb9b/Dynamic_Creative_Optimization_Q_A_-_EN.pdf',
  },
  {
    filename: 'Dynamic Creative Optimization Q A - EN.pdf',
    title: 'Dynamic Creative Optimization Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6RAi6SdNnJnTDWReoHQhCk/f455e78c5eba23fd3e626898ce90bb9b/Dynamic_Creative_Optimization_Q_A_-_EN.pdf',
  },
  {
    filename: 'Q_A_-_OOH_Specialists_-_EN.pdf',
    title: 'OOH Specialists Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2L4BPLtvQtwvXhPvxbXdJn/3ba1d276be25a31f8d24af20ec8e554f/Q_A_-_OOH_Specialists_-_EN.pdf',
  },
  {
    filename: 'Q A - OOH Specialists - EN.pdf',
    title: 'OOH Specialists Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2L4BPLtvQtwvXhPvxbXdJn/3ba1d276be25a31f8d24af20ec8e554f/Q_A_-_OOH_Specialists_-_EN.pdf',
  },
  {
    filename: 'qa-mar24-en.pdf',
    title: 'Agency Q&A',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/3fcOmv8GWtA41w0zxpproA/cabb67afcba9fea53e95ec936ded1095/qa-mar24-en.pdf',
  },
  {
    filename: 'Le_rapport_d-analyse_de_la_COVID-19__l-e__dition_1_.pdf',
    title: 'Rapport d’analyse - édition n° 1',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/17vuRx0HDpHraj6DxCx0yX/ec75f4a4d394cfbc8d9b8845490a3320/Le_rapport_d-analyse_de_la_COVID-19__l-e__dition_1_.pdf'
  },
  {
    filename: 'Le_rapport_d-analyse_de_la_COVID-19__l-e__dition_2_.pdf',
    title: 'Rapport d’analyse - édition n° 2',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/5lQl7ee1Z5VZOXqhxdbbBX/94434f6270d32f293a889795513cf09a/Le_rapport_d-analyse_de_la_COVID-19__l-e__dition_2_.pdf'
  },
  {
    filename: 'Le_rapport_d-analyse_de_la_COVID-19__l-e__dition_3_.pdf',
    title: 'Rapport d’analyse - édition n° 3',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4S5SFj5DlmSysXprMYVFq8/802a1a4a0d3aec3456dcf82852323508/Le_rapport_d-analyse_de_la_COVID-19__l-e__dition_3_.pdf'
  },
  {
    filename: 'INSIGHTS_REPORT_4_-_FR_.pdf',
    title: 'Rapport d’analyse - édition n° 4',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2v7QaEpQQgW7ShgH3wkRy4/ece3062c97bfa99112110439d2a0b343/INSIGHTS_REPORT_4_-_FR_.pdf'
  },
  {
    filename: 'Insights_Report_5_-FR-final_edit.pdf',
    title: 'Rapport d’analyse - édition n° 5',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/1wc1H8cp3TNfqM0xgD93e5/e8e40fa397a69430fd8946ceb6de7902/Insights_Report_5_-_FR_-_final_edit.pdf'
  },
  {
    filename: 'INSIGHTS_REPORT_6-FR_final.pdf',
    title: 'Rapport d’analyse - édition n° 6',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7nSz3C2gFMCVOuflgym1tt/d74619a720be815770ed6a48a6d469aa/INSIGHTS_REPORT_6_-_FR_final.pdf'
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q3_October_2022_-_FR.pdf',
    title: 'Rapport d’analyse - édition n° 7',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2I0zRbjUD3tstJzVYWAxI2/d74e353a69babcfe0d5dbdd9139bcf09/INSIGHTS_REPORT_-_Q3_October_2022_-_FR.pdf'
  },
  {
    filename: 'INSIGHTS_REPORT-Q1_Janvier_2023-FR.pdf',
    title: 'Rapport d’analyse - édition n° 8',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/5IoKeyZhhezOYtKI99i9pk/cdf9a5a2924270f7075a69ff565d623f/INSIGHTS_REPORT_-_Q1_Janvier_2023_-_FR.pdf'
  },
  {
    filename: 'INSIGHTS_REPORT_-_Q2_May_2023_-_FR.pdf',
    title: 'Rapport d’analyse - édition n° 9',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4SzM7ZPVnqAirf6L6wVoZv/65f5d75d68ee479ffd1a5cc2acf889c4/INSIGHTS_REPORT_-_Q2_May_2023_-_FR.pdf'
  },
  {
    filename: 'INSIGHTS_REPORT-Q3_2023-FR.pdf',
    title: 'Rapport d’analyse - édition n° 10',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7rBGcuuYKsVosBgp4b2zsc/63fc64fc548d717c66e9830455b89bda/INSIGHTS_REPORT_-_Q3_2023_-_FR.pdf'
  },
  {
    filename: 'COMMB_Insights_Report_-_Q4_2023__FR_.pdf',
    title: 'Rapport d’analyse - édition n° 11',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/oBa3tQ5jrTZVqQ3MH3q0e/86e3b2fd6013d1c9d6cee05c24923e40/COMMB_Insights_Report_-_Q4_2023__FR_.pdf'
  },
  {
    filename: 'Dentsu_QA_FR_compressed-1.pdf',
    title: 'Dentsu',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/6LFHKMaxjxekpfIzzUXHy2/5de286c146d7c69b4bf2416efdcc8b39/Dentsu_QA_FR_compressed-1.pdf'
  },
  {
    filename: 'QARogers_final_FR.pdf',
    title: 'Rogers. Sports & Media',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/1IaFKtBrFBsx7FQO0ki9Dp/e97253f52f2e92d8aca51d8ce7b9994d/QARogers_final_FR.pdf'
  },
  {
    filename: 'April-QA-FR-1.pdf',
    title: 'Astral, Outfront, Pattison',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/412rDjMLOzEHZoJ4QS4LaH/8dc4b50521ade37e8f67cd3a80a0fd87/April-QA-FR-1.pdf'
  },
  {
    filename: 'May_Brand_Direct_FR.pdf',
    title: 'Announceurs',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/ijMNXAdAgIGZwo9QA6b28/5fefecf5aaa18f4f684f70965351833e/May_Brand_Direct_FR.pdf'
  },
  {
    filename: 'FR-Programmatic-DOOH-pdf.pdf',
    title: 'Programmatique DOOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2n64yMAYCRjlExPn0s6LUL/d3ab1a2c6aa390851c651ae9cd7febb4/FR-Programmatic-DOOH-pdf.pdf'
  },
  {
    filename: 'QA_local-advertisers_fr.pdf',
    title: 'Local Advertisers',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7nNgZku7L7fcc80RJilxMl/a84fecdb3d418e8c87e5e07578e614b1/QA_local-advertisers_fr.pdf'
  },
  {
    filename: 'perspective-de-lindustrie-QA.pdf',
    title: 'Industry Perspective. Growth and Looking Towards 2022',
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/6x4ydmlNrdw63xhwZFPHnD/623b07436cb16160b403f2c06bf7abb6/perspective-de-lindustrie-QA.pdf'
  },
  {
    filename: 'qa-october-fr-1.pdf',
    title: 'The Power of Static OOH',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/7eq3nxb8RYAH9vAXwBiyaJ/5774fc82da4acdfbbbaf257abe8010df/qa-october-fr-1.pdf'
  },
  {
    filename: 'January-QA-final-FR.pdf',
    title: 'Amanda Dorenberg',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2zhqQ1I3Hn8ouuXP2h28PS/a99d66408a6d47ebe2572f546b610b47/January-QA-final-FR.pdf'
  },
  {
    filename: 'February_Q_A_-FR_final.pdf',
    title: "Creative's Perspective of OOH",
    url: 'https://downloads.ctfassets.net/1l6si2vnlb2k/2ZphBuRr1pyIO4bFevtfBl/b8c80accf3c9f9146c98dc1f00cde47c/February_Q_A_-_FR_final.pdf'
  },
  {
    filename: 'Affichage_inte__rieur_Q_A-avril_2022-FR.pdf',
    title: "L’affichage intérieur",
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2m50uZHqibPlGhvmCyImXB/06981c57f62e5f57632f9ca8be14b673/Affichage_inte__rieur_Q_A_-_avril_2022_-_FR.pdf'
  },
  {
    filename: 'Connectivity_Q_A-FR.pdf',
    title: 'Connectivité',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2k6o9Hrvg4HT5zVWps0XKc/a4468fd0bb507ae3bb08e9b5e8f33eab/Connectivity_Q_A_-_FR.pdf'
  },
  {
    filename: 'September_Q_A-Holiday_edition-FR.pdf',
    title: "L'affichage des fêtes",
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2e44Ss6cEdkzA3undLwujd/541e18fb9b038160831f672252f1dac3/September_Q_A_-_Holiday_edition_-_FR.pdf'
  },
  {
    filename: 'Travel_Q_A-November_2022-FR.pdf',
    title: "L'affichage de voyage",
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/ISlimJcM38GfTdpuwRL15/dc54f7ba7f9c421e89c4729a40c76753/Travel_Q_A_-_November_2022_-_FR.pdf'
  },
  {
    filename: 'February_Q_A-On_the_Move-FR.pdf',
    title: "L'affichage en mouvement",
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/4GupDhY1461eoFZh3hqi3Z/3a0383f0870d8330e9c5987265752db0/February_Q_A_-_On_the_Move_-_FR.pdf'
  },
  {
    filename: 'Dynamic_Creative_Optimization_Q_A-FR.pdf',
    title: 'Optimisation Dynamique de la creation',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/6RAi6SdNnJnTDWReoHQhCk/b9b858d0c58fd3e9ea01f353427cc3a9/Dynamic_Creative_Optimization_Q_A_-_FR.pdf'
  },
  {
    filename: 'Q_A-OOH_Specialists-_FR.pdf',
    title: "Des experts des l'affichage",
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2L4BPLtvQtwvXhPvxbXdJn/15c5ab02025e67ceb52339ca9600e3cb/Q_A_-_OOH_Specialists_-_FR.pdf'
  },
  {
    filename: 'qa-mar24-fr.pdf',
    title: 'Interview Agences',
    url: 'https://assets.ctfassets.net/1l6si2vnlb2k/2Tqo7mjCV7ZULte6OvJYMg/28800bbefcd69df264d7526ad2c8c877/qa-mar24-fr.pdf'
  }
];
export default reports;
