import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';

const Header = () => {
    return (
        <>
            <Heading>검색 서비스</Heading>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/demo">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/demo/video">Video</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="/demo/book">Book</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    )
};

export default Header;