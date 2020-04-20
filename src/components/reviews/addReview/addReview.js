import React, { useState } from 'react';
import FormInput from '../../form-input';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { APPLY_REVIEW } from '../../../redux/constants';

// Тут по идеи надо сделать контейнер отдельный для этого всего, чтобы логика с представлением не мешалась..

function AddReview({ handleSubmit }) {
  const initialReviewData = {
    userName: '',
    reviewText: '',
    rate: 0
  };
  const [reviewData, setReviewData] = useState(initialReviewData);

  const handleChange = event => {
    const { value, name } = event.target;
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div>
      <center>
        <form
          onSubmit={event =>
            handleSubmit(event, setReviewData, reviewData, initialReviewData)
          }
        >
          <FormInput
            label={'Your Name'}
            name={'userName'}
            value={reviewData.userName}
            handleChange={handleChange}
            required
          />
          <FormInput
            label={'Review'}
            name={'reviewText'}
            value={reviewData.reviewText}
            handleChange={handleChange}
            required
          />
          <Rate
            allowHalf
            onChange={value =>
              setReviewData(prev => ({ ...prev, rate: value }))
            }
            value={reviewData.rate}
          />
          <button>Add review</button>
        </form>
      </center>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  const handleSubmit = (event, setData, data, initialData) => {
    event.preventDefault();
    setData(initialData);
    dispatch({
      type: APPLY_REVIEW,
      payload: {
        ...data
      }
    });
  };
  return {
    handleSubmit
  };
};

export default connect(null, mapDispatchToProps)(AddReview);
