import classes from './style.module.scss';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { FC } from 'react';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

interface SelectOptionProps {
  pageSize: number;
  handleChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>,
  ) => void;
}

const SelectOption: FC<SelectOptionProps> = ({ pageSize, handleChange }) => {
  return (
    <div className={classes.root}>
      <p className={classes.label}>Page Size</p>
      <Select
        labelId="select-page-size-label"
        id="select-page-size-id"
        value={pageSize}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </div>
  );
};

export default SelectOption;
