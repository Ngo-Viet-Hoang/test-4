import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Radio,
  Rate,
  Slider,
  Switch,
  Upload,
} from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import categoryService from "../Service/CategoryService";
import foodService from "../Service/FoodService";
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import { useParams } from 'react-router-dom';
const { Option } = Select;
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FoodDetail = () => {
  const [form] = Form.useForm();
  const [isRedirectSuccess, setisRedirectSuccess] = useState(false);
  const [isLoading, serisLoading] = useState(false);
  // const [content, setcontent] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams()
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)

 

  console.log(id)
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'vuuqobal')
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/smiley-face/image/upload",
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    console.log(file)
    setImage(file.secure_url)
    setLoading(false)
  }

  const _setValue = (ev, key) => {
    ev.persist();
    this.setState(prevState => {
      prevState.form.dirty = false;
      prevState.form[key] = {
        value: ev.target.value,
        err: this._getInvalidErr(ev.target),
      }
      return prevState;
    });
  }

  const [foodStatus] = useState([
    {
      key: 1,
      type: "SALE"
    },
    {
      key: 2,
      type: "UNSALE"
    },
    {
      key: -1,
      type: "DELETED"
    },

    {
      key: -2,
      type: "STOP"
    },
  ])

  useEffect(() => {
    getCategoryList();
    getDetails();

  }, [])

  const getCategoryList = async () => {
    await categoryService
      .getCategoryList()
      .then((res) => {
        setCategoryList(res.data);
        console.log("999999999999999", res.data)
      })
      .catch((err) => {
        console.log(err);
      });

  }

  const getDetails = async () => {
    await foodService.getDetails(id).then((res) => {
      form.setFieldsValue({ id: res.data.id });
      form.setFieldsValue({ name: res.data.name});
      form.setFieldValue({slug: res.data.slug});
      form.setFieldValue({price: res.data.price});
      form.setFieldValue({description: res.data.description});
      form.setFieldValue({category: res.data.category});


    });
  };
  // const _fillForm = (data) => {
  //   this.setState(prevState => {
  //     let form = {};
  //     Object.keys(data).forEach(k => {
  //       form[k] = {
  //         value: data[k],
  //         err: '',
  //       }
  //     })
  //     form.dirty = false;
  //     prevState.form = form;
  //     return prevState;
  //   })
  // }

  const handleChangeStatus = (ev) => {
    setStatus(ev.target.value)

  }
  const handleChangeCategory = (ev) => {
    setCategory(ev.target.value)

  }

  const onFinish = async (values) => {
    let dataConverted = {

      category: { id: values.category },
      "id": values.id,
      "name": values.name,
      "slug": values.slug,
      "image": image,
      "price": values.price,
      "description": values.description,
      "status": values.status,
      "mealTime": null,

    };
    console.log(dataConverted)
    // await foodService
    //   .createNew(dataConverted)
    //   .then((res) => {
    //     console.log(res.data);
    //     setisRedirectSuccess(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios.post(`https://order-foods.herokuapp.com/api/v1/foods/create`, dataConverted)
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    // fetch("https://order-foods.herokuapp.com/api/v1/foods/create",{
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(dataConverted)
    // }).then(res => res.json()).then(data => {
    //   console.log(data);
    // })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (

    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      scrollToFirstError
    >
      <Form.Item
        id="id"
        label="Id"
        name="id"
        value={id.value}
        onChange={(ev) => this._setValue(ev, 'id')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        id="name"
        label="name"
        name="name"
        value={name.value}
        onChange={(ev) => this._setValue(ev, 'name')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        id="slug"
        label="slug"
        name ="slug"
        value={slug.value}
        onChange={(ev) => this._setValue(ev, 'slug')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        id="price"
        name="price"
        value={price.value}
        label="Price"

        onChange={(ev) => this._setValue(ev, 'price')}
        rules={[
          {
            required: true,
            message: 'Please input donation amount!',
          },
        ]}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        id="description"
        name="description"
        label="description"
        value={description.value}
        onChange={(ev) => this._setValue(ev, 'description')}
        rules={[
          {
            required: true,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        id="category"
        name="category"
        label="Category"
        value={category}
        onChange={handleChangeCategory}
      >
        <Select placeholder="select category">
          {categoryList.Pageable?.content.map((item) => (
            <Option key={item.id} value={item.id}>{item.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        id="status"
        name="status"
        label="Status"
        value={status}
        onChange={handleChangeStatus}
      >
        <Select placeholder="select status">
          {foodStatus.map((item, index) => (
            <Option key={index} value={item.id}>{item.type}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="image"
        label="image"
        value={image}
      >

        <div>
          <input type="file" name="file" placeholder="Upload an Image" onChange={uploadImage}

          />
        </div>
        {
          loading ? (
            <h3>Loading..</h3>
          ) : (
            <img src={image} style={{ width: '300px' }} />
          )
        }


      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};


export default FoodDetail;
