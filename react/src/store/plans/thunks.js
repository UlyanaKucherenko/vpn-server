import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { api } from 'api';
import { handleServerErrors } from 'utils/serverErrors';

const getPlans = createAsyncThunk('plans/getPlans', async () => {
  try {
    const { data } = await api.plans.getPlans();
    // console.log('data=>', data);
    return data.data;
  } catch (err) {
    // const { status } = err.response;
    handleServerErrors(err);
    throw err;
  }
});

const addPlan = createAsyncThunk('plans/createPlan', async (userData) => {
  try {
    const { data } = await api.plans.addPlan({
      ...userData,
      duration: userData.duration.value,
      price: Number(userData.price) * 100,
    });
    if (data.status) {
      toast.success(data.message);
    }
    return data;
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});
const deletePlan = createAsyncThunk('plans/deletePlan', async (planId) => {
  try {
    const { data } = await api.plans.deletePlan(planId);
    if (data.status) {
      toast.success(data.message);
    }
    return { planId };
  } catch (err) {
    handleServerErrors(err);
    throw err;
  }
});

const editPlan = createAsyncThunk(
  'plans/editPlan',
  async ([formData, planId]) => {
    try {
      const { data } = await api.plans.editPlan([
        {
          ...formData,
          duration: formData.duration.value,
          price: Number(formData.price) * 100,
        },
        planId,
      ]);
      if (data.status) {
        toast.success(data.message);
      }
      return data;
    } catch (err) {
      handleServerErrors(err);
      throw err;
    }
  }
);

const thunks = {
  getPlans,
  addPlan,
  deletePlan,
  editPlan,
};

export { thunks };
