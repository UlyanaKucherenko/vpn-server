import { createContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { IconTick } from 'components/Icons';
import { Main, Steps, Step, StepTitle, Icon } from './styled';

RStepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      slug: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  currentStep: PropTypes.shape({
    id: PropTypes.number,
    slug: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  activeStep: PropTypes.shape({
    id: PropTypes.number,
    slug: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  setModifiedSteps: PropTypes.func,
  setCurrentStep: PropTypes.func,
  setActiveStep: PropTypes.func,
  css: PropTypes.object,
};
export const StepperContext = createContext({});

export function RStepper({
  steps,
  children,
  currentStep,
  activeStep,
  setModifiedSteps,
  setCurrentStep,
  setActiveStep,
  css,
}) {
  const onSetComplete = useCallback(() => {
    const modifiedSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return { ...step, completed: true };
      }
      return step;
    });
    setModifiedSteps(modifiedSteps);
  }, [currentStep.id]);

  const onNextStep = useCallback(() => {
    const nextStep =
      steps[steps.findIndex((step) => step.id === currentStep.id) + 1];
    onSetComplete();
    setCurrentStep(nextStep);
    if (currentStep.id === activeStep.id) setActiveStep(nextStep);
  }, [currentStep.id, activeStep.id]);

  const onPrevStep = useCallback(() => {
    const prevStep =
      steps[steps.findIndex((step) => step.id === currentStep.id) - 1];
    setCurrentStep(prevStep);
  }, [currentStep.id]);
  const renderSteps = () => {
    return steps.map(({ id, title, completed }) => (
      <Step key={id}>
        <StepTitle
          active={id === activeStep.id}
          completed={completed}
        >
          {title}
        </StepTitle>
        {completed ? (
          <Icon>
            <IconTick size={15} />
          </Icon>
        ) : null}
      </Step>
    ));
  };
  const contextObj = useMemo(
    () => ({ onNextStep, onPrevStep }),
    [onNextStep, onPrevStep]
  );

  return (
    <Main>
      <Steps css={css}>{renderSteps()}</Steps>
      <StepperContext.Provider value={contextObj}>
        {children}
      </StepperContext.Provider>
    </Main>
  );
}
