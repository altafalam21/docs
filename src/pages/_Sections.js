import React from "react";
import {
  PaperColumnRenderer,
  PaperContainer,
  InfoPaper,
  DoubleInfoPaper
} from "../components/PaperContainer";
import { SingleStep } from "../components/SingleStep";
import Link from "@docusaurus/Link";
import styles from "./_Sections.module.css";
import { Text } from "../components/Text";
import { WorkflowLanguageExamples } from "../components/WorkflowLanguageExamples";

export const StepBoxesSection = ({ steps = [] }) => (
  <div className="row">
    <PaperColumnRenderer
      spaceEvenly
      colClassName={styles.mobileSpaced}
      columns={steps.map((singleStepJson) => (
        <SingleStep {...singleStepJson} key={singleStepJson.title} />
      ))}
    />
  </div>
);

export const WhatIsConductorSection = ({
  title = "What is Conductor?",
  description = "",
  sideImage,
  videoTitle,
  videoSrc,
  videoFooterCaption,
}) => (
  <div className="row">
    <InfoPaper
      title={title}
      infoColumn1={
        <div className="row">
          {sideImage == null ? (
             description 
          ) : (
            <>
              <div className="col col--6">{description}</div>
              <div className="col col--6">
                <img src={sideImage} alt="sample_workflow" width="200px"></img>
              </div>
            </>
          )}
        </div>
      }
      infoColumn2={
        <div className="container">
          <div className="row videoContainer">
            <iframe
              src={videoSrc}
              title={videoTitle}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="row">
            <Text align="center" className={styles.videoFooterCaption}>
              {videoFooterCaption}
            </Text>
          </div>
        </div>
      }
    />
  </div>
);

export const TitleDoubleTextSection = ({
  title1 = "Why Conductor?",
  title2 = "",
  firstColumnText,
  secondColumnText,
}) => (
  <div className="row">
    <DoubleInfoPaper
      title1={title1}
      title2={title2}
      infoColumn1={firstColumnText}
      infoColumn2={secondColumnText}
    />
  </div>
);

export const BuildYourFirstWorkflowLinkButton = ({
  caption = "Build yoir first Workflow in 2 Minutes",
  to,
}) => (
  <div className="row row--center">
    <Link
      className={`button button--info button--lg ${styles.whiteFont}`}
      to={to}
    >
      {caption}
    </Link>
  </div>
);

export const YourfirstWorkflowSection = ({
  title,
  languageSamples,
  rightImage,
  sectionFooter,
}) => (
  <div className="row">
    <InfoPaper title={title}>
      <div className="row">
        <div className="col col--8">
          <WorkflowLanguageExamples languageSamples={languageSamples} />
        </div>
        <div className="col col--4">
          <PaperContainer className={styles.firstWorkflowContainer}>
            <img
              src={rightImage}
              alt="small-diagram"
            ></img>
          </PaperContainer>
        </div>
      </div>
      <Text align="center" className={styles.firstWorkflowFooter}>
        {sectionFooter}
      </Text>
    </InfoPaper>
  </div>
);
