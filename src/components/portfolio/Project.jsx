import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
    }));
  };

  handleTitleClick = () => {
    const { link } = this.props.item;
    if (link) {
      window.open(link, "_blank");
    }
  };

  render() {
    const { name, languagesIcons, source, info, picture, link } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <div className="title-container">
          <h3 onClick={this.handleTitleClick} style={{ cursor: "pointer" }}>
            {name}
          </h3>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          )}
        </div>
        <div className="image-link">
          <img src={picture} alt="" onClick={this.handleInfo} />
        </div>
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourcecode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
