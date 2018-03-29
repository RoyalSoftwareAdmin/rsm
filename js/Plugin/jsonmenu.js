var jsonObject = {
    "redirect": [
      {
          "name": "Dashboard",
          "defaultlink": "Dashboard.aspx?SiteID=<sitevalue>",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      },
      {
          "name": "OperationalDashboard",
          "defaultlink": "PlantOperationalDashboard1.aspx?SiteID=<sitevalue>",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      },
      {
          "name": "Inverter",
          "defaultlink": "InverterDashboard.aspx?SiteID=<sitevalue>&inverterid=<invertervalue>",
          "sitesnotrequired": "",
          "sitespecificlink": [
            {
                "siteids": "1",
                "specificlink": "InverterwSJBDashboard.aspx?SiteID=<sitevalue>&inverterid=<invertervalue>"
            }
          ],
          "sub": null
      },
      {
          "name": "AlarmLog",
          "defaultlink": "AlarmLog.aspx?SiteID=<sitevalue>&InverterID=<invertervalue>",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      }
    ],
    "menu": [
      {
          "name": "Inverters",
          "defaultlink": "InverterDashboard.aspx?SiteID=<sitevalue>",
          "sitesnotrequired": "",
          "sitespecificlink": [
            {
                "siteids": "",
                "specificlink": "InverterwSJBDashboard.aspx?SiteID=<sitevalue>"
            }
          ],
          "sub": null
      },
      {
          "name": "Energy Dashboard",
          "defaultlink": "EnergyDashboard.aspx?SiteID=<sitevalue>",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      },
      {
          "name": "Energy Summary",
          "defaultlink": "EnergyCalendar.aspx?SiteID=<sitevalue>",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      },
      {
          "name": "Alarm Log",
          "defaultlink": "AlarmLog.aspx?SiteID=<sitevalue>&Type=1",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      },
      {
          "name": "Site Layout",
          "defaultlink": "PlantOperationalDashboardDiagram.aspx?SiteID=<sitevalue>",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": null
      },
      {
          "name": "Report",
          "defaultlink": "",
          "sitesnotrequired": "",
          "sitespecificlink": null,
          "sub": [
            {
                "name": "Plant Summary Report",
                "defaultlink": "Report.aspx?ReportType=1",
                "sitesnotrequired": "",
                "sitespecificlink": null,
                "sub": null
            },
            {
                "name": "Inverter Summary Report",
                "defaultlink": "Report.aspx?ReportType=2",
                "sitesnotrequired": "",
                "sitespecificlink": null,
                "sub": null
            },
            {
                "name": "AC PowerPlant Report",
                "defaultlink": "Report.aspx?ReportType=3",
                "sitesnotrequired": "",
                "sitespecificlink": null,
                "sub": null
            }
          ]
      }
    ]
}
