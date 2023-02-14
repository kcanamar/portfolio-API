# RESTful API 

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | Portfolio API|
| Description | Relevant information on Kyle Canamar, to create various portfolios with front end frameworks. |
| Developers | Kyle Canamar |
| Live Website | https://portfolio-api-dr2t.onrender.com/ |
| Repo | https://github.com/kcanamar/portfolio-API |
| Technologies | Node.JS, Express.JS, JavaScript |

## Routing Table

| Endpoint | Method | Response | Other |
| -------- | ------ | -------- | ----- |
| /api/projects | GET | JSON of all projects | |
| /api/projects/:id | GET | JSON of one project | |
| /api/about | GET | JSON of all about versions | |
| /api/about/:id | GET | JSON of one about version | |
| /api/talents | GET | JSON of one all talents | |
| /api/talents/:id | GET | JSON of one talent version | |

## ERD 

```mermaid
%%{ init: { 
	'theme': 'base', 
	'themeVariables': { 
		'primaryColor': '#BBB6A5', 
		'primaryTextColor': '#2A2F33', 
		'primaryBorderColor': '#8C9491', 
		'lineColor': '#8C8C9C', 
		'secondaryColor': '#8C9491', 
		'tertiaryColor': '#fff' 
		} 
	} 
}%%
erDiagram
    ABOUT ||--|{ PROJECT : has
    ABOUT {
        string name
        string email
        string linked
        string tweet
        string git
        string blog
        string bio
        number age
        array project_ref
        array tech_strings
        array portfolios
    }
    PROJECT {
        string image
        string name
        string live
        string git
    }
    Talent {
        string title
        string desc
        string link
        string icon
    }
```