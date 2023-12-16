import React from 'react';
import moment from 'moment'

const DateTimePretty = (WrappedComponent) => {

    const ProcessedDate = props => {
      let date
      const duration = moment.duration((moment().diff(moment(props.date))))
      if (duration.asDays() >= 1) {
        date = `${duration.asDays().toFixed(0)} дней назад`
      } else if (duration.asHours() >= 1) {
        date = `${duration.asHours().toFixed(0)} часов назад`
      } else {
        date = `${duration.asMinutes().toFixed(0)} минут назад`
      }

      return (
          <>
            <WrappedComponent date={date} />
          </>
        );
      }

    return ProcessedDate;
  };

export default DateTimePretty;