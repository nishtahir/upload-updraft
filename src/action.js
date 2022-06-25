import core from '@actions/core';
import github from '@actions/github';
import { getAllInput } from './inputs.js';
import { upload } from './upload.js';

async function run() {
  const input = getAllInput(core, github);
  try {
    await upload(input);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
