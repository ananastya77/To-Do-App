import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Octokit } from '@octokit/rest';

import styles from './About.module.css';
import star from './Pictures/Star.svg';
import forkIcon from './Pictures/Union.svg';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    error: '',
    repoList: [],
    userName: 'ananastya77',
    User: [],
    firstRepo: 0,
    lastRepo: 2
  }

  componentDidMount() {
    octokit.repos.listForUser({
  		username: this.state.userName
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false,
			});
		})
		.catch(err =>
			this.setState({
				hasError: true,
				error:  err,
				isLoading: false
			})
		);

    octokit.users.getByUsername({
      username: this.state.userName
    }).then(({ data }) => {
      this.setState({
        User: data,
				isLoading: false
      })
    })
    .catch(err => {
      this.setState({
        hasError: true,
				error:  err,
				isLoading: false
      });
    });
  }

  onClickNext = () => {
    this.setState({
      firstRepo: this.state.firstRepo + 2,
      lastRepo: this.state.lastRepo + 2
    })
  };

  onClickBack = () => {
    this.setState({
      firstRepo: this.state.firstRepo - 2,
      lastRepo: this.state.lastRepo - 2
    })
  };

  render() {
    const {
      isLoading,
      hasError,
      error,
      repoList,
      User,
      firstRepo,
      lastRepo
    } = this.state;

    if (this.state.hasError) {
      return (
        <div className={styles.wrap}>
          <h1 className={styles.title}>
            { this.state.error.name }
          </h1>
          <p className={styles.error__text}>
            Something went wrong:
          </p>
          <p className={styles.error__text}>
            { this.state.error.message }
          </p>
        </div>
      );
    };

    return (
      <div className={styles.wrap}>
        { isLoading ?
          <h1 className={styles.loading}>
            l
            <span className={styles.letter}>o</span>
            ading
          </h1> : (
          <div>
            <h1 className={styles.title}>
              ab
              <span className={styles.letter}>o</span>
              ut
            </h1>
            <div className={styles.user}>
              <img src={ User.avatar_url } className={styles.avatar}></img>
              <div className={styles.user__info}>
                <h3 className={styles.name}>
                  { User.name }
                </h3>
                <h3 className={styles.login}>
                  l<span className={styles.letter}>o</span>gin:
                  <a href={ User.html_url } className={styles.user__link}>
                    { User.login }
                  </a>
                </h3>
                <p className={styles.bio}>
                  { User.bio }
                </p>
              </div>
            </div>
            <div className={styles.repo}>
              <h3 className={styles.repo__title}>
                rep<span className={styles.letter}>o</span>s
              </h3>
              {repoList.length === 0 && <p className={styles.repo__message}>
                  There is no repositories yet.
                </p>
              }
              {repoList.length > 0 && <ul className={styles.list}>
                {repoList.slice(firstRepo, lastRepo).map(repo => (
                  <li key={repo.id} className={styles.repo__item}>
                    <a href={ repo.html_url } className={styles.repo__link}>{repo.name}</a>
                    <div className={styles.repo__info}>
                      <div className={styles.language}>
                        <span className={styles[`repoLanguage_${repo.language}`.toLowerCase()] + ' ' + styles.icon}></span>
                        { repo.language === null ? 'unknown' : repo.language }
                      </div>
                      <div className={styles.stargazers}>
                        <img src={star} className={styles.star}></img>
                        <span>{ repo.stargazers_count }</span>
                      </div>
                      <div className={styles.forks}>
                        <img src={forkIcon} className={styles.forks_icon}></img>
                        <span>{ repo.forks }</span>
                      </div>
                      <span className={styles.updated}>
                        Updated at {new Date(repo.updated_at).toLocaleString('eng', { day:'numeric', month:'long', year:'numeric'})}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            }
              <div className={styles.button__container}>
                <button className={styles.button} disabled={firstRepo ===0} onClick={() => this.onClickBack()}>Prev</button>
                <button className={styles.button} disabled={repoList.length - lastRepo <= 0} onClick={() => this.onClickNext()}>Next</button>
              </div>
            </div>
          </div>
          )
        }
      </div>
    )
  }
};

export default About;
