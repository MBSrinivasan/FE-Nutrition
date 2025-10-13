"use client";
import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Select,
  Card,
  Tabs,
  Badge,
  Tag,
  Space,
  Flex,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";

const { Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

export default function VendorMessagesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState("All");

  const tabs = [
    { key: "All", count: 24 },
    { key: "Leads", count: 8 },
    { key: "Projects", count: 12 },
    { key: "System Alerts", count: 4 },
    { key: "Unread", count: 6 },
    { key: "Priority", count: 3 },
    { key: "Escalated", count: 1 },
  ];
  const [selectedFilters, setSelectedFilters] = useState({
    type: "All Types",
    status: "All Status",
    sla: "All SLA",
    country: "All Countries",
    product: "All Products",
  });

  const metrics = {
    todayLeads: 8,
    pending: 3,
    avgResponse: "2.5h",
    lostLeads: 2,
  };

  const categoryCounts = {
    All: 24,
    Leads: 8,
    Projects: 12,
    "System Alerts": 4,
    Unread: 6,
    Priority: 3,
    Escalated: 1,
  };

  const categories = Object.keys(categoryCounts);

  const filterOptions = {
    type: ["All Types", "Lead", "Project", "System Alert"],
    status: ["All Status", "New", "In Progress", "Resolved", "Closed"],
    sla: ["All SLA", "1h", "4h", "24h", "48h"],
    country: ["All Countries", "USA", "Canada", "UK", "Germany", "France"],
    product: ["All Products", "Product A", "Product B", "Product C"],
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <VendorHeaderNav>
      <style jsx>{`
        @media (min-width: 768px) {
          .metrics-space {
            display: flex !important;
          }
        }
      `}</style>
      <div
        style={{
          padding: "0",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          marginTop: "48px",
          width: "100%",
          maxWidth: "none",
          boxSizing: "border-box",
        }}
      >
        <div style={{ padding: "24px", width: "100%" }}>
          {/* Header Section */}
          <Row
            justify="space-between"
            align="top"
            style={{ marginBottom: "24px" }}
            gutter={[16, 16]}
          >
            <Col xs={24} sm={24} md={8} lg={6}>
              <Title
                level={2}
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                }}
              >
                Messages
              </Title>
            </Col>
            <Col xs={24} sm={24} md={10} lg={12}>
              <Flex
                justify="flex-end"
                align="center"
                wrap="wrap"
                gap="small"
                style={{ minWidth: 0 }}
              >
                {/* Metrics */}
                <Space size="small" wrap style={{ maxWidth: "100%" }}>
                  <Space size="small">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#52c41a",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <Typography.Text
                      type="secondary"
                      style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)" }}
                    >
                      Today: {metrics.todayLeads} leads
                    </Typography.Text>
                  </Space>
                  <Space size="small">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#faad14",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <Typography.Text
                      type="secondary"
                      style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)" }}
                    >
                      Pending: {metrics.pending}
                    </Typography.Text>
                  </Space>
                  <Space size="small">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#1890ff",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <Typography.Text
                      type="secondary"
                      style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)" }}
                    >
                      Avg: {metrics.avgResponse}
                    </Typography.Text>
                  </Space>
                  <Space size="small">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#ff4d4f",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <Typography.Text
                      type="secondary"
                      style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)" }}
                    >
                      Lost: {metrics.lostLeads}
                    </Typography.Text>
                  </Space>
                </Space>
              </Flex>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6}>
              <Flex justify="flex-end" align="center" style={{ width: "100%" }}>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  size="small"
                  style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)" }}
                >
                  New Message
                </Button>
              </Flex>
            </Col>
          </Row>

          {/* Search and Filters */}
          <Card style={{ marginBottom: "24px", width: "100%" }}>
            <Row gutter={[8, 8]} align="middle" style={{ minWidth: 0 }}>
              {/* Search Bar */}
              <Col xs={24} sm={24} md={12} lg={8}>
                <Input
                  placeholder="Search by buyer name, country, or product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: "#bfbfbf",
                        fontSize: "clamp(12px, 2.5vw, 16px)",
                      }}
                    />
                  }
                  size="small"
                  style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)" }}
                />
              </Col>

              {/* Filter Icon */}
              <Col xs={24} sm={24} md={2} lg={1}>
                <Flex justify="center">
                  <FilterOutlined
                    style={{
                      fontSize: "clamp(12px, 2.5vw, 16px)",
                      color: "#bfbfbf",
                    }}
                  />
                </Flex>
              </Col>

              {/* Filter Dropdowns */}
              {Object.entries(filterOptions).map(([key, options]) => (
                <Col xs={12} sm={12} md={5} lg={3} key={key}>
                  <Select
                    value={selectedFilters[key as keyof typeof selectedFilters]}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    onChange={(value) => handleFilterChange(key, value)}
                    style={{
                      width: "100%",
                      fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
                    }}
                    size="small"
                  >
                    {options.map((option) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Category Tabs */}
          <Card style={{ marginBottom: "24px", width: "100%" }}>
            <div
              style={{
                display: "flex",
                gap: "clamp(8px, 2vw, 24px)",
                alignItems: "center",
                flexWrap: "wrap",
                overflowX: "auto",
                minWidth: 0,
              }}
            >
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  style={{
                    cursor: "pointer",
                    color: active === tab.key ? "#1677ff" : "#595959",
                    fontWeight: active === tab.key ? 600 : 400,
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(4px, 1vw, 6px)",
                    padding: "clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 12px)",
                    borderRadius: active === tab.key ? "8px" : "none",
                    backgroundColor:
                      active === tab.key ? "#F3E8FF" : "transparent",
                    transition: "all 0.2s ease",
                    fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    minWidth: "fit-content",
                  }}
                >
                  <span>{tab.key}</span>
                  <Tag
                    color="#9810FA"
                    style={{
                      borderRadius: "12px",
                      marginLeft: 2,
                      fontWeight: 500,
                      fontSize: "clamp(0.6rem, 2vw, 0.75rem)",
                    }}
                  >
                    {tab.count}
                  </Tag>
                </div>
              ))}
            </div>
          </Card>

          {/* Messages Content Area */}
          <Row>
            <Col span={24}>
              <Card style={{ width: "100%" }}>
                <Flex
                  vertical
                  align="center"
                  justify="center"
                  style={{ padding: "64px 24px", textAlign: "center" }}
                >
                  <MessageOutlined
                    style={{
                      fontSize: "48px",
                      color: "#bfbfbf",
                      marginBottom: "16px",
                    }}
                  />
                  <Title level={4} style={{ marginBottom: "8px" }}>
                    No messages found
                  </Title>
                  <Typography.Text
                    type="secondary"
                    style={{ marginBottom: "24px" }}
                  >
                    {searchQuery
                      ? `No messages match "${searchQuery}"`
                      : `No messages in ${activeTab.toLowerCase()} category`}
                  </Typography.Text>
                  <Button type="primary" icon={<PlusOutlined />}>
                    Create New Message
                  </Button>
                </Flex>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </VendorHeaderNav>
  );
}
