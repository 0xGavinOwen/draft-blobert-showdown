import React from 'react';
import { Table } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTableTheme: CustomFlowbiteTheme["table"] = {
    root: {
        base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
        shadow: "absolute left-0 top-0 -z-10 h-full w-full bg-orange-700 drop-shadow-md dark:bg-black",
        wrapper: "relative"
      },
      body: {
        base: "group/body",
        cell: {
          base: "px-6 py-4"
        }
      },
      head: {
        base: "group/head text-xs uppercase text-gray-300",
        cell: {
          base: "bg-orange-950/50 px-6 py-3"
        }
      },
      row: {
        base: "group/row",
        hovered: "hover:bg-gray-50 hover:text-black cursor-pointer",
        striped: "text-gray-300 odd:bg-[#605850]/70 even:bg-[#664A44]"
      }
  };

export const BattleTable = () => {
  return (
    <Table theme={customTableTheme} hoverable striped className="text-center">
            <Table.Head>
            <Table.HeadCell className="text-left">Blobber Name</Table.HeadCell>

            <Table.HeadCell>Blob1</Table.HeadCell>
            <Table.HeadCell>Blob2</Table.HeadCell>
            <Table.HeadCell>Blob3</Table.HeadCell>
            <Table.HeadCell>Blob4</Table.HeadCell>
            <Table.HeadCell>Blob5</Table.HeadCell>
            <Table.HeadCell>Blob6</Table.HeadCell>


            <Table.HeadCell>Total Games</Table.HeadCell>
            <Table.HeadCell>Win Rate</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">


                <Table.Row className="bg-orange-200">
                    <Table.Cell className="text-left whitespace-nowrap font-medium">
                    {'1234567890123456789012345678901'}
                    </Table.Cell>

                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    
                    <Table.Cell>88</Table.Cell>
                    <Table.Cell>88%</Table.Cell>

                </Table.Row>

                <Table.Row className="bg-orange-200">
                    <Table.Cell className="text-left whitespace-nowrap font-medium">
                    {'1234567890123456789012345678901'}
                    </Table.Cell>

                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    
                    <Table.Cell>88</Table.Cell>
                    <Table.Cell>88%</Table.Cell>

                </Table.Row>

                <Table.Row className="bg-orange-200">
                    <Table.Cell className="text-left whitespace-nowrap font-medium">
                    {'1234567890123456789012345678901'}
                    </Table.Cell>

                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    <Table.Cell><img className="h-10" src="/assets/pc.png" alt=""/></Table.Cell>
                    
                    <Table.Cell>88</Table.Cell>
                    <Table.Cell>88%</Table.Cell>

                </Table.Row>

            </Table.Body>
        </Table>
  )
}