"use client";
import React, { useState, useCallback, useMemo } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Select,
  Card,
  Badge,
  Space,
  Flex,
  Avatar,
  Divider,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  PlusOutlined,
  MessageOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  PaperClipOutlined,
  SendOutlined,
  UserOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  TagOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

// TypeScript interfaces
interface Message {
  id: number;
  name: string;
  country: string;
  time: string;
  message: string;
  status: "Open" | "In Progress" | "Pending Response" | "Closed";
  priority: "High" | "Medium" | "Low" | "Urgent";
  leadId: string;
  category: string;
  timeLeft: string;
  timeStatus?: string;
  unreadCount: number;
  isActive: boolean;
  avatar: string;
  avatarColor: string;
}

interface SystemAlert {
  id: number;
  title: string;
  time: string;
  message: string;
  status: "Open" | "Closed";
  priority: "High" | "Medium" | "Low";
  avatar: string;
  avatarColor: string;
}

interface TabItem {
  key: string;
  count: number;
}

interface FilterOptions {
  type: string[];
  status: string[];
  sla: string[];
  country: string[];
  product: string[];
}

interface SelectedFilters {
  type: string;
  status: string;
  sla: string;
  country: string;
  product: string;
}

interface Metrics {
  todayLeads: number;
  pending: number;
  avgResponse: string;
  lostLeads: number;
}

// Sample data for messages
const messages: Message[] = [
  {
    id: 1,
    name: "Lovejot Singh",
    country: "India",
    time: "2h ago",
    message:
      "Looking for bulk manufacturing services for electronic components. Need 10,000 units with specific quality standards.",
    status: "Open",
    priority: "High",
    leadId: "L-24-1029",
    category: "Electronics",
    timeLeft: "2.5h left",
    unreadCount: 1,
    isActive: true,
    avatar: "LS",
    avatarColor: "#8200db",
  },
  {
    id: 2,
    name: "Priya Sharma",
    country: "USA",
    time: "45m ago",
    message:
      "Need textile manufacturing partner for sustainable clothing line. Looking for organic cotton processing capabilities.",
    status: "In Progress",
    priority: "Medium",
    leadId: "L-24-1030",
    category: "Textiles",
    timeLeft: "2.5h left",
    unreadCount: 2,
    isActive: false,
    avatar: "PS",
    avatarColor: "#8200db",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    country: "Canada",
    time: "5h ago",
    message:
      "Project milestone update required for chemical processing equipment. Need status on quality compliance testing.",
    status: "Pending Response",
    priority: "Medium",
    leadId: "P-23-041",
    category: "Chemicals",
    timeLeft: "24h TAT",
    timeStatus: "Overdue",
    unreadCount: 0,
    isActive: false,
    avatar: "RK",
    avatarColor: "#8200db",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    country: "Australia",
    time: "30m ago",
    message:
      "Urgent: Food processing equipment needed for dairy facility. Compliance with local health regulations required.",
    status: "Open",
    priority: "Urgent",
    leadId: "L-24-1031",
    category: "Food",
    timeLeft: "2.5h left",
    unreadCount: 0,
    isActive: false,
    avatar: "SJ",
    avatarColor: "#8200db",
  },
];

const systemAlerts: SystemAlert[] = [
  {
    id: 1,
    title: "System Alert",
    time: "1 day ago",
    message:
      "License renewal reminder: Your Beetloop vendor license expires in 7 days. Please renew to continue receiving leads.",
    status: "Open",
    priority: "High",
    avatar: "SA",
    avatarColor: "#ca3500",
  },
  {
    id: 2,
    title: "System Alert",
    time: "3 hours ago",
    message:
      "Lead Reassignment Notice: Since the lead L-24-1025 was not responded to within the given TAT, it has been reassigned to another vendor.",
    status: "Closed",
    priority: "Medium",
    avatar: "SA",
    avatarColor: "#ca3500",
  },
];

export default function VendorMessagesPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<Message>(messages[0]);
  const [responseText, setResponseText] = useState<string>("");
  const [mobileView, setMobileView] = useState<"list" | "detail" | "contact">(
    "list"
  );

  const tabs: TabItem[] = [
    { key: "All", count: 24 },
    { key: "Leads", count: 8 },
    { key: "Projects", count: 12 },
    { key: "System Alerts", count: 4 },
    { key: "Unread", count: 6 },
    { key: "Priority", count: 3 },
    { key: "Escalated", count: 1 },
  ];

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    type: "All Types",
    status: "All Status",
    sla: "All SLA",
    country: "All Countries",
    product: "All Products",
  });

  const metrics: Metrics = {
    todayLeads: 8,
    pending: 3,
    avgResponse: "2.5h",
    lostLeads: 2,
  };

  const filterOptions: FilterOptions = {
    type: ["All Types", "Lead", "Project", "System Alert"],
    status: ["All Status", "New", "In Progress", "Resolved", "Closed"],
    sla: ["All SLA", "1h", "4h", "24h", "48h"],
    country: ["All Countries", "USA", "Canada", "UK", "Germany", "France"],
    product: ["All Products", "Product A", "Product B", "Product C"],
  };

  const handleFilterChange = useCallback(
    (filterType: keyof SelectedFilters, value: string): void => {
      setSelectedFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    },
    []
  );

  const getPriorityColor = useCallback((priority: string): string => {
    switch (priority) {
      case "High":
      case "Urgent":
        return "#ff6900";
      case "Medium":
        return "#f0b100";
      case "Low":
        return "#52c41a";
      default:
        return "#d9d9d9";
    }
  }, []);

  const getStatusColor = useCallback((status: string): string => {
    switch (status) {
      case "Open":
        return "#52c41a";
      case "In Progress":
        return "#1890ff";
      case "Pending Response":
        return "#faad14";
      case "Closed":
        return "#d9d9d9";
      default:
        return "#d9d9d9";
    }
  }, []);

  // Memoized filtered messages based on search query and active tab
  const filteredMessages = useMemo(() => {
    let filtered: Message[] = [...messages];

    if (searchQuery) {
      filtered = filtered.filter(
        (message) =>
          message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          message.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          message.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          message.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeTab !== "All") {
      if (activeTab === "Leads") {
        filtered = filtered.filter((message) =>
          message.leadId.startsWith("L-")
        );
      } else if (activeTab === "Projects") {
        filtered = filtered.filter((message) =>
          message.leadId.startsWith("P-")
        );
      } else if (activeTab === "System Alerts") {
        // Convert system alerts to message format for display
        filtered = systemAlerts.map((alert) => ({
          id: alert.id,
          name: alert.title,
          country: "System",
          time: alert.time,
          message: alert.message,
          status: alert.status as Message["status"],
          priority: alert.priority as Message["priority"],
          leadId: `SA-${alert.id}`,
          category: "System",
          timeLeft: "N/A",
          unreadCount: 0,
          isActive: false,
          avatar: alert.avatar,
          avatarColor: alert.avatarColor,
        }));
      } else if (activeTab === "Unread") {
        filtered = filtered.filter((message) => message.unreadCount > 0);
      } else if (activeTab === "Priority") {
        filtered = filtered.filter(
          (message) =>
            message.priority === "High" || message.priority === "Urgent"
        );
      } else if (activeTab === "Escalated") {
        filtered = filtered.filter(
          (message) => message.status === "Pending Response"
        );
      }
    }

    return filtered;
  }, [searchQuery, activeTab]);

  return (
    <VendorHeaderNav>
      <style jsx>{`
        .messages-page {
          display: flex;
          height: auto;
          min-height: calc(100vh - 64px);
          background-color: #f5f5f5;
          margin-top: 64px;
          position: relative;
          width: 100%;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          width: 100%;
        }

        .message-list {
          width: 320px;
          background-color: white;
          border-right: 1px solid #f0f0f0;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .message-detail {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .contact-panel {
          width: 320px;
          background-color: white;
          border-left: 1px solid #f0f0f0;
          padding: 16px;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .content-area {
          flex: 1;
          display: flex;
          min-width: 0;
          flex-wrap: nowrap;
        }

        /* Header alignment - Figma style */
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;
          flex-wrap: nowrap;
        }

        .header-title {
          flex-shrink: 0;
        }

        .header-metrics {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-button {
          flex-shrink: 0;
        }

        /* Category tabs - keep in a single horizontal row */
        .category-tabs {
          width: 100%;
        }

        .tabs-scroll {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        /* Metrics row (Figma-aligned) */
        .metrics-grid {
          display: flex;
          align-items: center;
          gap: 16px;
          background-color: rgba(236, 236, 240, 0.3);
          border-radius: 10px;
          padding: 8px 16px;
          flex-wrap: nowrap;
        }

        .metric {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
        }

        .metric-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .metric-text {
          font-size: 14px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .messages-page {
            flex-direction: column;
            height: auto;
            min-height: calc(100vh - 64px);
          }

          .main-content {
            width: 100%;
          }

          .content-area {
            flex-direction: column;
          }

          .message-list {
            width: 100%;
            height: 300px;
            border-right: none;
            border-bottom: 1px solid #f0f0f0;
          }

          .message-detail {
            width: 100%;
            min-height: 400px;
          }

          .contact-panel {
            width: 100%;
            border-left: none;
            border-top: 1px solid #f0f0f0;
          }

          .header-content {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start !important;
          }

          .metrics-grid {
            flex-wrap: wrap;
            gap: 12px 16px;
          }

          .filter-row {
            gap: 8px;
          }

          .category-tabs {
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .tabs-scroll {
            display: flex;
            gap: 12px;
            min-width: max-content;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .message-list {
            width: 280px;
          }

          .contact-panel {
            width: 280px;
          }

          .header-content {
            flex-wrap: wrap;
            gap: 16px;
          }

          .metrics-container {
            order: 2;
            width: 100%;
          }

          .new-message-btn {
            order: 1;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1025px) {
          .content-area {
            flex-direction: row;
          }
          .desktop-section {
            display: block !important;
          }
        }

        /* Show mobile elements on mobile */
        @media (max-width: 768px) {
          .mobile-back-btn {
            display: block !important;
          }

          .mobile-contact-btn {
            display: block !important;
          }
        }

        /* Hide mobile elements on desktop */
        @media (min-width: 769px) {
          .mobile-back-btn,
          .mobile-contact-btn {
            display: none !important;
          }
        }

        /* Interactive States */

        .message-card {
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .message-card:hover {
          background-color: #f9f9f9;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .message-card.active {
          background-color: #f9f0ff;
          border-left: 4px solid #ad46ff;
        }

        .tab-item {
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .tab-item:hover {
          background-color: #f3e8ff;
          transform: translateY(-1px);
        }

        .tab-item.active {
          background-color: #f3e8ff;
          color: #8200db;
          font-weight: 600;
        }

        .filter-select {
          transition: all 0.2s ease;
        }

        .filter-select:hover {
          border-color: #8200db;
          box-shadow: 0 0 0 2px rgba(130, 0, 219, 0.1);
        }

        .action-button {
          transition: all 0.2s ease;
        }

        .action-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .primary-button {
          background: linear-gradient(135deg, #9810fa 0%, #8200db 100%);
          border: none;
          transition: all 0.3s ease;
        }

        .primary-button:hover {
          background: linear-gradient(135deg, #8200db 0%, #6b00b8 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(130, 0, 219, 0.4);
        }

        .primary-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(130, 0, 219, 0.3);
        }

        /* Custom basic button styled like AntD primary */
        .custom-antlike-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          height: 32px;
          border: none;
          border-radius: 8px;
          background-color: #9810fa;
          color: #ffffff;
          font-size: 14px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
          transition: all 0.2s ease;
        }

        .custom-antlike-btn:hover {
          filter: brightness(0.95);
        }

        .custom-antlike-btn:active {
          transform: translateY(1px);
        }

        .badge-interactive {
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .badge-interactive:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .avatar-interactive {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .avatar-interactive:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        /* Focus States for Accessibility */
        .focusable:focus {
          outline: 2px solid #8200db;
          outline-offset: 2px;
        }

        /* Loading States */
        .loading {
          opacity: 0.6;
          pointer-events: none;
        }

        .loading::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin: -10px 0 0 -10px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #8200db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Smooth Transitions */
        * {
          transition: background-color 0.2s ease, border-color 0.2s ease,
            color 0.2s ease;
        }

        /* Badge text color override */
        .badge-white .ant-scroll-number-only-unit-current,
        .badge-white .ant-badge-count,
        .badge-white .ant-scroll-number,
        .badge-white .ant-scroll-number-only {
          color: #ffffff !important;
        }

        .badge-white .ant-scroll-number-only-unit-current * {
          color: #ffffff !important;
        }
      `}</style>
      <div className="messages-page">
        {/* Main Content Area */}
        <div className="main-content">
          {/* Top Header */}
          <div
            style={{
              backgroundColor: "white",
              padding: "16px",
              borderTop: "1px solid #e8e8e8",
            }}
            className="header-content"
          >
            <div className="header-title">
              <Title
                level={2}
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Messages
              </Title>
            </div>

            <div className="header-metrics">
              {/* Metrics */}
              <div className="metrics-grid">
                <div className="metric">
                  <img
                    src="/assets/images/icons/today.svg"
                    alt="Today leads"
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <Text className="metric-text">
                    Today: {metrics.todayLeads} leads
                  </Text>
                </div>
                <div className="metric">
                  <img
                    src="/assets/images/icons/pending.svg"
                    alt="Pending"
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <Text className="metric-text">
                    Pending: {metrics.pending}
                  </Text>
                </div>
                <div className="metric">
                  <img
                    src="/assets/images/icons/avgResponse.svg"
                    alt="Avg Response"
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <Text className="metric-text">
                    Avg Response: {metrics.avgResponse}
                  </Text>
                </div>
                <div className="metric">
                  <img
                    src="/assets/images/icons/lost.svg"
                    alt="Lost Leads"
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <Text className="metric-text">
                    Lost Leads: {metrics.lostLeads}
                  </Text>
                </div>
              </div>
            </div>

            <div className="header-button">
              <button
                className="custom-antlike-btn new-message-btn"
                style={{ fontSize: "14px" }}
              >
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <PlusOutlined style={{ marginRight: 8 }} />
                </span>
                New Message
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div
            style={{
              backgroundColor: "white",
              padding: "16px 24px",
            }}
          >
            <Row gutter={[16, 8]} align="middle" className="filter-row">
              {/* Search */}
              <Col xs={24} sm={24} md={8} lg={8}>
                <Input
                  placeholder="Search by buyer name, country, or product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
                  style={{ fontSize: "14px" }}
                />
              </Col>

              {/* Filter Icon */}
              <Col
                xs={24}
                sm={24}
                md={1}
                lg={1}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FilterOutlined
                  style={{ fontSize: "16px", color: "#bfbfbf" }}
                />
              </Col>

              {/* Filter Dropdowns - keep in the grid, one row on desktop */}
              <Col xs={12} sm={12} md={3} lg={3}>
                <Select
                  value={selectedFilters.type}
                  className="filter-select"
                  style={{ width: "100%", fontSize: "14px" }}
                  onChange={(value) => handleFilterChange("type", value)}
                >
                  {filterOptions.type.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Select
                  value={selectedFilters.status}
                  className="filter-select"
                  style={{ width: "100%", fontSize: "14px" }}
                  onChange={(value) => handleFilterChange("status", value)}
                >
                  {filterOptions.status.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Select
                  value={selectedFilters.sla}
                  className="filter-select"
                  style={{ width: "100%", fontSize: "14px" }}
                  onChange={(value) => handleFilterChange("sla", value)}
                >
                  {filterOptions.sla.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Select
                  value={selectedFilters.country}
                  className="filter-select"
                  style={{ width: "100%", fontSize: "14px" }}
                  onChange={(value) => handleFilterChange("country", value)}
                >
                  {filterOptions.country.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Select
                  value={selectedFilters.product}
                  className="filter-select"
                  style={{ width: "100%", fontSize: "14px" }}
                  onChange={(value) => handleFilterChange("product", value)}
                >
                  {filterOptions.product.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>

            {/* Category Tabs */}
            <div className="category-tabs" style={{ marginTop: "16px" }}>
              <div className="tabs-scroll">
                {tabs.map((tab) => (
                  <div
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`tab-item ${
                      activeTab === tab.key ? "active" : ""
                    }`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      backgroundColor:
                        activeTab === tab.key ? "#f3e8ff" : "transparent",
                      color: activeTab === tab.key ? "#8200db" : "#717182",
                      fontWeight: activeTab === tab.key ? "600" : "400",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    <span>{tab.key}</span>
                    <span
                      style={{
                        backgroundColor: "#8200db",
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: "500",
                        padding: "2px 8px",
                        borderRadius: "8px",
                        display: "inline-block",
                        minWidth: "20px",
                        textAlign: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      {tab.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="content-area">
            {/* Message List */}
            <div
              className="message-list desktop-section"
              style={{
                display:
                  mobileView === "list" || mobileView === "detail"
                    ? "block"
                    : "none",
              }}
            >
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    setMobileView("detail");
                  }}
                  className={`message-card ${message.isActive ? "active" : ""}`}
                  style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid #f0f0f0",
                    backgroundColor: message.isActive ? "#f9f0ff" : "white",
                    borderLeft: message.isActive
                      ? "4px solid #ad46ff"
                      : "4px solid transparent",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px" }}>
                    <Avatar
                      size={40}
                      className="avatar-interactive"
                      style={{
                        backgroundColor: message.avatarColor,
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {message.avatar}
                    </Avatar>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "4px",
                        }}
                      >
                        <div>
                          <Text strong style={{ fontSize: "16px" }}>
                            {message.name}
                          </Text>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginTop: "2px",
                            }}
                          >
                            <EnvironmentOutlined
                              style={{ fontSize: "12px", color: "#717182" }}
                            />
                            <Text
                              style={{ fontSize: "12px", color: "#717182" }}
                            >
                              {message.country}
                            </Text>
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <Text style={{ fontSize: "12px", color: "#717182" }}>
                            {message.time}
                          </Text>
                          {message.unreadCount > 0 && (
                            <Badge
                              count={message.unreadCount}
                              style={{
                                backgroundColor: "#fb2c36",
                                fontSize: "10px",
                                marginTop: "4px",
                              }}
                            />
                          )}
                        </div>
                      </div>

                      <Text
                        style={{
                          fontSize: "14px",
                          color: "#717182",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        {message.message}
                      </Text>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "4px",
                          marginBottom: "8px",
                        }}
                      >
                        <Badge
                          text={message.status}
                          className="badge-interactive"
                          style={{
                            backgroundColor: getStatusColor(message.status),
                            color: "white",
                            fontSize: "12px",
                          }}
                        />
                        <Badge
                          text={message.priority}
                          className="badge-interactive"
                          style={{
                            backgroundColor: getPriorityColor(message.priority),
                            color: "white",
                            fontSize: "12px",
                          }}
                        />
                        <Badge
                          text={message.leadId}
                          className="badge-interactive"
                          style={{
                            backgroundColor: "white",
                            color: "#262626",
                            border: "1px solid #d9d9d9",
                            fontSize: "12px",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "4px",
                        }}
                      >
                        <Badge
                          text={message.category}
                          className="badge-interactive"
                          style={{
                            backgroundColor: "white",
                            color: "#262626",
                            border: "1px solid #d9d9d9",
                            fontSize: "12px",
                          }}
                        />
                        <Badge
                          text={message.timeLeft}
                          className="badge-interactive"
                          style={{
                            backgroundColor: "#e6f7ff",
                            color: "#1890ff",
                            fontSize: "12px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Detail */}
            <div
              className="message-detail desktop-section"
              style={{
                display:
                  mobileView === "detail" || mobileView === "contact"
                    ? "block"
                    : "none",
              }}
            >
              {selectedMessage && (
                <>
                  {/* Message Header */}
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px 24px",
                      borderBottom: "1px solid #f0f0f0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* Mobile Back Button */}
                    <Button
                      type="text"
                      onClick={() => setMobileView("list")}
                      style={{ display: "none" }}
                      className="mobile-back-btn"
                    >
                      ← Back
                    </Button>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <Avatar
                        size={40}
                        style={{
                          backgroundColor: selectedMessage.avatarColor,
                          color: "white",
                        }}
                      >
                        {selectedMessage.avatar}
                      </Avatar>
                      <div>
                        <Title
                          level={4}
                          style={{ margin: 0, fontSize: "16px" }}
                        >
                          {selectedMessage.name}
                        </Title>
                        <Text style={{ fontSize: "14px", color: "#717182" }}>
                          Received {selectedMessage.time}
                        </Text>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <Button
                        size="small"
                        className="action-button"
                        style={{
                          backgroundColor: "#f6ffed",
                          color: "#52c41a",
                          borderColor: "#b7eb8f",
                        }}
                      >
                        Self Assign
                      </Button>
                      <Button size="small" className="action-button">
                        Accept Lead
                      </Button>
                      <Button size="small" className="action-button">
                        Escalate
                      </Button>
                      <Button
                        size="small"
                        className="action-button"
                        icon={<ExclamationCircleOutlined />}
                      />
                      <Button
                        size="small"
                        className="action-button mobile-contact-btn"
                        onClick={() => setMobileView("contact")}
                        style={{ display: "none" }}
                      >
                        Contact
                      </Button>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div style={{ flex: 1, padding: "24px", overflowY: "auto" }}>
                    {/* Lead Details */}
                    <Card style={{ marginBottom: "16px" }}>
                      <Title level={4} style={{ marginBottom: "16px" }}>
                        Lead Details
                      </Title>
                      <Text
                        style={{
                          fontSize: "14px",
                          color: "#717182",
                          display: "block",
                          marginBottom: "16px",
                        }}
                      >
                        {selectedMessage.message}
                      </Text>

                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                          <Text strong>Buyer Name:</Text>
                          <br />
                          <Text>{selectedMessage.name}</Text>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Text strong>Country:</Text>
                          <br />
                          <Text>{selectedMessage.country}</Text>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Text strong>Product Type:</Text>
                          <br />
                          <Text>{selectedMessage.category}</Text>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Text strong>Response Time:</Text>
                          <br />
                          <Text>{selectedMessage.timeLeft}</Text>
                        </Col>
                      </Row>
                    </Card>

                    {/* Message Thread */}
                    <div style={{ marginBottom: "16px" }}>
                      <div
                        style={{
                          backgroundColor: "#f6ffed",
                          border: "1px solid #b7eb8f",
                          padding: "16px",
                          borderRadius: "8px",
                          marginBottom: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px",
                          }}
                        >
                          <Avatar
                            size={32}
                            style={{
                              backgroundColor: "#52c41a",
                              color: "white",
                            }}
                          >
                            {selectedMessage.avatar}
                          </Avatar>
                          <Text strong>{selectedMessage.name}</Text>
                          <Text style={{ color: "#717182", fontSize: "12px" }}>
                            {selectedMessage.time}
                          </Text>
                          <Badge
                            text="Buyer"
                            style={{
                              backgroundColor: "#52c41a",
                              color: "white",
                            }}
                          />
                        </div>
                        <Text>{selectedMessage.message}</Text>
                      </div>

                      <div
                        style={{
                          backgroundColor: "#fff7e6",
                          border: "1px solid #ffd591",
                          padding: "16px",
                          borderRadius: "8px",
                          marginBottom: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px",
                          }}
                        >
                          <Avatar
                            size={32}
                            style={{
                              backgroundColor: "#fa8c16",
                              color: "white",
                            }}
                          >
                            SA
                          </Avatar>
                          <Text strong>System Alert</Text>
                          <Text style={{ color: "#717182", fontSize: "12px" }}>
                            1 hour ago
                          </Text>
                          <Badge
                            text="System Alert"
                            style={{
                              backgroundColor: "#fa8c16",
                              color: "white",
                            }}
                          />
                        </div>
                        <Text>
                          TAT Reminder: This lead requires response within 2
                          hours. Current time remaining: 1 hour 45 minutes.
                        </Text>
                      </div>

                      <div
                        style={{
                          backgroundColor: "#fffbe6",
                          border: "1px solid #ffe58f",
                          padding: "16px",
                          borderRadius: "8px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px",
                          }}
                        >
                          <Avatar
                            size={32}
                            style={{
                              backgroundColor: "#fadb14",
                              color: "white",
                            }}
                          >
                            IN
                          </Avatar>
                          <Text strong>Internal Note</Text>
                          <Text style={{ color: "#717182", fontSize: "12px" }}>
                            45 minutes ago
                          </Text>
                          <Badge
                            text="Internal Note (Team Only)"
                            style={{
                              backgroundColor: "#fadb14",
                              color: "white",
                            }}
                          />
                        </div>
                        <Text>
                          Customer inquiry seems legitimate. Electronics
                          expertise required. Check with production team for
                          capacity.
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* Response Area */}
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px 24px",
                      borderTop: " 0.8px solid rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <TextArea
                      placeholder="Type your response to the buyer..."
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                      style={{ marginBottom: "12px" }}
                      rows={4}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", gap: "8px" }}>
                        <Button size="small" icon={<PaperClipOutlined />}>
                          Attach Files
                        </Button>
                        <Button size="small">Templates</Button>
                        <Button size="small">Internal Note</Button>
                      </div>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <Button size="small">Save Draft</Button>
                        <Button
                          type="primary"
                          icon={<SendOutlined />}
                          className="primary-button"
                        >
                          Send Response
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Contact Details Panel */}
            <div
              className="contact-panel desktop-section"
              style={{ display: mobileView === "contact" ? "block" : "none" }}
            >
              {/* Mobile Back Button */}
              <Button
                type="text"
                onClick={() => setMobileView("detail")}
                style={{ display: "none", marginBottom: "16px" }}
                className="mobile-back-btn"
              >
                ← Back to Message
              </Button>

              <Title level={4} style={{ marginBottom: "16px" }}>
                Contact Details
              </Title>

              {/* Contact Info */}
              <Card style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <Avatar
                    size={48}
                    style={{ backgroundColor: "#8200db", color: "white" }}
                  >
                    {selectedMessage?.avatar}
                  </Avatar>
                  <div>
                    <Text strong>Procurement Manager</Text>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <UserOutlined style={{ color: "#717182" }} />
                    <Text>VendorPro Inc</Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <EnvironmentOutlined style={{ color: "#717182" }} />
                    <Text>San Francisco, CA</Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ClockCircleOutlined style={{ color: "#717182" }} />
                    <Text>PST (UTC-8)</Text>
                  </div>
                </div>
              </Card>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <Button
                  icon={<PhoneOutlined />}
                  block
                  className="action-button"
                >
                  Call
                </Button>
                <Button icon={<MailOutlined />} block className="action-button">
                  Email
                </Button>
                <Button
                  icon={<CalendarOutlined />}
                  block
                  className="action-button"
                >
                  Schedule Meeting
                </Button>
              </div>

              {/* Open Tasks */}
              <Card style={{ marginBottom: "16px" }}>
                <Title level={5} style={{ marginBottom: "12px" }}>
                  Open Tasks
                </Title>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid #717182",
                        borderRadius: "2px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <Text strong style={{ fontSize: "14px" }}>
                        Send pricing proposal
                      </Text>
                      <br />
                      <Text style={{ fontSize: "12px", color: "#717182" }}>
                        Due: Today 5:00 PM • You
                      </Text>
                    </div>
                    <Badge
                      text="High"
                      style={{ backgroundColor: "#ff4d4f", color: "white" }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid #717182",
                        borderRadius: "2px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <Text strong style={{ fontSize: "14px" }}>
                        Follow up on technical specs
                      </Text>
                      <br />
                      <Text style={{ fontSize: "12px", color: "#717182" }}>
                        Due: Tomorrow 9:00 AM • Priya
                      </Text>
                    </div>
                    <Badge
                      text="Medium"
                      style={{ backgroundColor: "#faad14", color: "white" }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CheckCircleOutlined style={{ color: "#52c41a" }} />
                    <div style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          textDecoration: "line-through",
                          color: "#717182",
                        }}
                      >
                        Schedule demo call
                      </Text>
                      <br />
                      <Text style={{ fontSize: "12px", color: "#717182" }}>
                        Due: This week • You
                      </Text>
                    </div>
                    <Badge
                      text="Low"
                      style={{ backgroundColor: "#52c41a", color: "white" }}
                    />
                  </div>
                </div>
              </Card>

              {/* Next Step */}
              <Card style={{ marginBottom: "16px" }}>
                <Title level={5} style={{ marginBottom: "12px" }}>
                  Next Step
                </Title>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <ClockCircleOutlined style={{ color: "#717182" }} />
                  <Text>Send pricing proposal by Today 5:00 PM</Text>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card style={{ marginBottom: "16px" }}>
                <Title level={5} style={{ marginBottom: "12px" }}>
                  Recent Activity
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Text style={{ fontSize: "12px", color: "#717182" }}>
                    • Last order: $15,000 (2 months ago)
                  </Text>
                  <Text style={{ fontSize: "12px", color: "#717182" }}>
                    • Previous RFQ: R-0891 (Completed)
                  </Text>
                  <Text style={{ fontSize: "12px", color: "#717182" }}>
                    • Open invoices: $2,300
                  </Text>
                  <Text style={{ fontSize: "12px", color: "#717182" }}>
                    • Support tickets: 1 open, 5 resolved
                  </Text>
                </div>
              </Card>

              {/* Tags */}
              <Card>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <TagOutlined style={{ color: "#717182" }} />
                  <Title level={5} style={{ margin: 0 }}>
                    Tags
                  </Title>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <Badge
                    text="VIP Customer"
                    style={{
                      backgroundColor: "white",
                      color: "#262626",
                      border: "1px solid #d9d9d9",
                    }}
                  />
                  <Badge
                    text="Tech Industry"
                    style={{
                      backgroundColor: "white",
                      color: "#262626",
                      border: "1px solid #d9d9d9",
                    }}
                  />
                  <Badge
                    text="Enterprise"
                    style={{
                      backgroundColor: "white",
                      color: "#262626",
                      border: "1px solid #d9d9d9",
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </VendorHeaderNav>
  );
}
