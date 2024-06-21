import React, { useState, useEffect } from "react";
import "../styles/Data.css";

interface BusinessData {
  bid: number;
  bname: string;
  quantityrating: number;
  qualityrating: number;
  pricerating: number;
  address: string;
}

interface CustomerData {

  userid: number;
  username: string;
  nickname: string;
  pass: string;
  email: string;
  createdAt: string;
  userRole: string;

}

interface ProductData {

  pid: number;
  bid: number;
  pname: string;
  quantityrating: number;
  qualityrating: number;
  pricerating: number;
  previewcount: number;
  price: number;

}

const Display: React.FC = () => {
  const [businessData, setBusinessData] = useState<BusinessData[]>([]);
  const [businessDataError, setBusinessError] = useState<string | null>(null);

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [productDataError, setProductError] = useState<string | null>(null);

  const [customerData, setCustomerData] = useState<CustomerData[]>([]);
  const [customerDataError, setCustomerError] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:80/api/customer")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((customerData) => {
        setCustomerData(customerData);
        setLoading(false);
      })
      .catch((customerDataError) => {
        setCustomerError(customerDataError);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:80/api/business")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((businessData) => {
        setBusinessData(businessData);
        setLoading(false);
      })
      .catch((businessDataError) => {
        setBusinessError(businessDataError);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:80/api/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((productData) => {
        setProductData(productData);
        setLoading(false);
      })
      .catch((productDataError) => {
        setProductError(productDataError);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (businessDataError) return <div>{businessDataError}</div>;
  if (productDataError) return <div>{productDataError}</div>;
  if (customerDataError) return <div>{customerDataError}</div>;

  return (
    <div className="container">
      <h1>Welcome to the Display Data page</h1>
      <p>See below business data in JSON format:</p>

      <div className="flex-container">
        <div className="flex-column">
          <h3>Customer Data</h3>
          <ul>
            {customerData.map((item) => (
              <div className="data-card" key={item.userid}>
                {item.username}
              </div>
            ))}
          </ul>
        </div>
        <div className="flex-column">
          <h3>Business Data</h3>
          <ul>
            {businessData.map((item) => (
              <div className="data-card" key={item.bid}>
                {item.bname}
              </div>
            ))}
          </ul>
        </div>
        <div className="flex-column">
          <h3>Product Data</h3>
          <ul>
            {productData.map((item) => (
              <div className="data-card" key={item.pid}>
                {item.pname}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Display;
