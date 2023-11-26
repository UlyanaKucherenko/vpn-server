import { WEB_API_ROUTES } from 'api/api-routes';
import http from '../../http';

export const plans = {
  getPlans() {
    return http.get(WEB_API_ROUTES.plans.plans);
  },
  addPlan(formData) {
    return http.post(WEB_API_ROUTES.plans.plans, formData);
  },

  deletePlan(planId) {
    return http.delete(
      WEB_API_ROUTES.plans.plansById.replace('{planId}', planId)
    );
  },

  editPlan([formData, planId]) {
    return http.put(
      WEB_API_ROUTES.plans.plansById.replace('{planId}', planId),
      formData
    );
  },
};
