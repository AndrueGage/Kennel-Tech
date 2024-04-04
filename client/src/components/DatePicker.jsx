import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const Calendar = () => (
  <Space direction="vertical" size={12}>
    <RangePicker showTime />
  </Space>
);
export default Calendar;