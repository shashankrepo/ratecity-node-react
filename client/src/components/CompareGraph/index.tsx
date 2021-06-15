import { FC, useState } from 'react';
import classes from './style.module.scss';
import { Product } from '../../common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import InputField from '../InputField';

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Dialog from '@material-ui/core/Dialog';

interface CompareGraphProps {
  open: true;
  selectedProducts: Product[];
  handleClose: () => void;
}

const CompareGraph: FC<CompareGraphProps> = ({
  open,
  handleClose,
  selectedProducts,
}) => {
  const [interestRate, setInterestRate] =
    useState<number | undefined>(undefined);
  const data = selectedProducts.map((p) => {
    return {
      ...p,
      user: interestRate,
    };
  });

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <div className={classes.title}>
          <p>Smart Compare</p>
          {handleClose ? (
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              onClick={handleClose}
              icon={faTimes}
              size={'lg'}
            />
          ) : null}
        </div>
        <div className={classes.inputField}>
          <InputField
            placeholder="Enter interest rate"
            type="text"
            name="interest-rate"
            autoFocus
            value={interestRate}
            onChange={(e) => setInterestRate(e.currentTarget.value.trim())}
          />
        </div>
        <div className={classes.content}>
          <div
            style={{
              width: 600,
              height: 450,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={425}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="companyName" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="comparisonRate" barSize={25} fill="#e87276" />
                <Bar dataKey="advertisedRate" barSize={25} fill="#43668c" />
                <Line
                  type="monotone"
                  strokeWidth={5}
                  dataKey="user"
                  stroke="#00a676"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CompareGraph;
