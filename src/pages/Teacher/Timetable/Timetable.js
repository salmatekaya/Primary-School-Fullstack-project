import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {appointments} from '../../Administration/TimeTableMangement/demo-data/appointments'

const currentDate = '2018-06-27';

const TimeTable = () => {
  const [data, setData] = React.useState(appointments);

  return (
    <React.Fragment>
      <Paper>
        <Scheduler
          data={data}
          height={1100}
        >
          <ViewState
            currentDate={currentDate}
          />
          <WeekView
            startDayHour={7}
            endDayHour={18}
          />

          <Appointments />
        </Scheduler>
      </Paper>
    </React.Fragment>
  );
};

export default TimeTable;


