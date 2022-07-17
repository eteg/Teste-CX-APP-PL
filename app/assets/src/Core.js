import { viaCEP } from '../src/services/viaCEP.js';
import {
  validZipCode,
  addZipCodeMask
} from './validators/zipCode.js';


const Core = {
  validZipCode,
  addZipCodeMask,
  viaCEP
};

export default Core;
